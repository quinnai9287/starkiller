export default function useSphere(canvasRef) {
  const WIDTH = window.innerWidth;
  const HEIGHT = window.innerHeight;
  const VIEW_ANGLE = 27;
  const ASPECT = WIDTH / HEIGHT;
  const NEAR = 0.1;
  const FAR = 100;

  let scene = null
  let camera = null
  let renderer = null;
  let saturn = null;
  let sphere = null;

  const $container = ref(canvasRef);
  // ... other necessary refs

  const init = async () => {
    await setScene();
    await setCamera();
    await setObject();
    await setLighting();
    await setRenderer();
    render();
  };

  const setScene = async() => {
    scene = new THREE.Scene();
    // Other scene setups
  };

  const setCamera = async() => {
    camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
    camera.position.z = WIDTH < 768 ? 20: 15;
    scene.add(camera);
  };


  const render = () => {
    requestAnimationFrame(render, 30); 
    saturn.rotation.y += 0.001;
    // saturn.rotation.z += 0.001;
    renderer.render(scene, camera);
  };

  const setRenderer = async() => {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(WIDTH, HEIGHT);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    $container.value.appendChild(renderer.domElement);
  };

  const setObject = async () => {
    saturn = new THREE.Group();
    saturn.rotation.set(0.4, 0.3, 0);
    console.log('setObject')
    const map = await loadTexture('/2k_eris_fictional.jpg');
    // const sphereMaterial = new THREE.MeshPhongMaterial({ color: '#887070', shading: THREE.FlatShading });
    const surfaceMaterial = new THREE.MeshBasicMaterial({ 
      map,
      transparent: true,
      opacity: 0.3, 
    });
    
    const geometry = new THREE.SphereGeometry(2, 32, 16);
    ;

    sphere = new THREE.Mesh(geometry, surfaceMaterial);
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    sphere.position.set(0, 0, 0);

    saturn.add(sphere);
    scene.add(saturn);
  };

  const setLighting = async() =>{
    //---------------
    //   LIGHTING
    //---------------

    // Ambient Light: globally illuminates all objects in the scene equally.
    const light = new THREE.AmbientLight('#ffffff', .6);
    scene.add(light);

    //Spot Light: This light gets emitted from a single point in one direction, along a cone that increases in size the further from the light it gets. 
    const spotLight = new THREE.SpotLight('#E481FC', 1, 360);
    spotLight.position.set(0, 30, 10);
    spotLight.castShadow = true;
    scene.add(spotLight);

    // Hemisphere Light: A light source positioned directly above the scene, with color fading from the sky color to the ground color.
    const hemisphereLight = new THREE.HemisphereLight( '#ffffbb', '#080820', 0.1 );
    scene.add( hemisphereLight );

    // adding directional light, think of this as stage lighting, color then strength
    const directionalLight = new THREE.DirectionalLight('#d68cea', .90);
    directionalLight.position.set(1, 1, 1); // set its position
    directionalLight.castShadow = true;
    scene.add(directionalLight); // adding our directional light to the scene

  }

  const onResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    if(width < 768){
      camera.position.z = 20;
    }
  };

  const loadTexture = async(url) => {
    const loader = new THREE.TextureLoader();
    return new Promise(resolve => loader.load(url, resolve));
  }

  onMounted(() => {
    window.addEventListener('resize', onResize);
    init();
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize);
  });

  return { $container };
}
