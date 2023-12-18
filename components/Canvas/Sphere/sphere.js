/*eslint-disable */
export default class DrawPlanet {
  constructor(container) {
    this.WIDTH = window.innerWidth;
    this.HEIGHT = window.innerHeight;


  }

  async init(){


    this.$container = document.getElementById('container')
    
    await this.setScene()
    await this.setCamera()
    await this.setObject()
    await this.setLighting()
    await this.setRenderer()

    // await this.renderer.render(this.scene, this.camera);
    await this.render();
  }

  render = () => {
    requestAnimationFrame(this.render.bind(this), 30); 
    this.saturn.rotation.y += 0.008;
    this.saturn.rotation.z += 0.001;
    this.renderer.render(this.scene, this.camera);
  };

  setScene(){
    //---------------
    //    SCENE
    //---------------

    this.scene = new THREE.Scene();
  }

  setCamera(){
    //---------------
    //    CAMERA
    //---------------

    // settings used to create camera
    const VIEW_ANGLE = 27; //75
    const ASPECT = this.WIDTH / this.HEIGHT;
    const NEAR = 0.1;
    const FAR = 100;

    // create camera
    this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
    this.camera.position.z = 15;
    this.scene.add(this.camera);
  }

  async setObject(){
    //---------------
    //     OBJECTS
    //---------------
    this.saturn = new THREE.Group();
    this.saturn.rotation.set(0.4, 0.3, 0);
    

    // const texture = new THREE.TextureLoader().load('http://localhost:3000/2k_eris_fictional.jpg');
    const map = await this.loadTexture('http://localhost:3000/2k_eris_fictional.jpg')
  
    //const map = await this.loadTexture('http://localhost:3000/2k_stars_milky_way.jpg')
  
    // Mesh Material
    const sphereMaterial = new THREE.MeshPhongMaterial({ color: '#887070', shading: THREE.FlatShading});
    const sufaceMaterial = new THREE.MeshBasicMaterial({ map });
    // const sufaceMaterial = new THREE.MeshBasicMaterial({ 
    //   color: 0x00ffff, 
    //   //lightMapIntensity: 10,
    //   wireframe: true
    // });

    // const geometry = new THREE.IcosahedronGeometry(1, 3)
    const geometry = new THREE.SphereGeometry(2,32,16)
    console.log('sufaceMaterial=', sphereMaterial, sufaceMaterial)
    // create the planet
    // this.sphere = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 3), sphereMaterial );
    this.sphere = new THREE.Mesh( geometry, sufaceMaterial );
    // this.sphere.material.side = THREE.BackSide;
    // console.log('sphere=', this.sphere)


    this.sphere.castShadow = true;
    this.sphere.receiveShadow = true;
    this.sphere.position.set(0, 0, 0);
    
    this.saturn.add(this.sphere);
    this.scene.add(this.saturn);

  }

  loadTexture(url){
    const loader = new THREE.TextureLoader();
    return new Promise(resolve => loader.load(url, resolve));
  }

  setLighting(){
    //---------------
    //   LIGHTING
    //---------------

    // Ambient Light: globally illuminates all objects in the scene equally.
    const light = new THREE.AmbientLight('#ffffff', .6);
    this.scene.add(light);

    //Spot Light: This light gets emitted from a single point in one direction, along a cone that increases in size the further from the light it gets. 
    const spotLight = new THREE.SpotLight('#E481FC', 1, 360);
    spotLight.position.set(0, 30, 10);
    spotLight.castShadow = true;
    this.scene.add(spotLight);

    // Hemisphere Light: A light source positioned directly above the scene, with color fading from the sky color to the ground color.
    const hemisphereLight = new THREE.HemisphereLight( '#ffffbb', '#080820', 0.1 );
    this.scene.add( hemisphereLight );

    // adding directional light, think of this as stage lighting, color then strength
    const directionalLight = new THREE.DirectionalLight('#d68cea', .90);
    directionalLight.position.set(1, 1, 1); // set its position
    directionalLight.castShadow = true;
    this.scene.add(directionalLight); // adding our directional light to the scene

  }

  setRenderer(){
    //---------------
    //   RENDERER
    //---------------

    // create renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    // set renderer size
    this.renderer.setSize(this.WIDTH, this.HEIGHT);
    // this.renderer.setClearColor('#111');
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.shadowMap.enabled = true;

    // attach the render-supplied DOM element
    

    this.$container.appendChild(this.renderer.domElement);

  }

  onResize(){

    console.log('resize')
    const width = window.innerWidth;
    const height = window.innerHeight;


  //  console.log('this.camera',this.camera)
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

}





// // Variables
// var WIDTH = window.innerWidth;
// var HEIGHT = window.innerHeight;
// //var $container = $('#container'); // DOM element to render
// const $container = document.getElementById('container')
// console.log('$container', $container)

// //---------------
// //    SCENE
// //---------------
// var scene = new THREE.Scene();

// //---------------
// //    CAMERA
// //---------------

// // settings used to create camera
// var VIEW_ANGLE = 27; //75
// var ASPECT = WIDTH / HEIGHT;
// var NEAR = 0.1;
// var FAR = 1000;

// // create camera
// var camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
// camera.position.z = 9;
// scene.add(camera);

// //---------------
// //     OBJECTS
// //---------------
// saturn = new THREE.Group();
// saturn.rotation.set(0.4, 0.3, 0);
// scene.add(saturn);

// // Mesh Material
// var sphereMaterial = new THREE.MeshPhongMaterial({ color: '#5E58F9', shading: THREE.FlatShading});
// var ringsMaterial = new THREE.MeshStandardMaterial( { color:'#E481FC', shading: THREE.FlatShading } );

// // create the planet
// var sphere = new THREE.Mesh(new THREE.IcosahedronGeometry( 1, 3 ), sphereMaterial);
// sphere.castShadow = true;
// sphere.receiveShadow = true;
// sphere.position.set(0, 0, 0);
// saturn.add(sphere);

// // create the rings
// var rings = new THREE.Mesh( new THREE.TorusGeometry( 1.33, 0.09, 36, 36 ), ringsMaterial );
// rings.position.set(0, 0, 0);
// rings.rotateX(80);
// rings.castShadow = true;
// rings.receiveShadow = true;
// saturn.add(rings);

// //---------------
// //   LIGHTING
// //---------------

// // Ambient Light: globally illuminates all objects in the scene equally.
// var light = new THREE.AmbientLight('#ffffff', .6);
// scene.add(light);

// //Spot Light: This light gets emitted from a single point in one direction, along a cone that increases in size the further from the light it gets. 
// var spotLight = new THREE.SpotLight('#E481FC', 1, 360);
// spotLight.position.set(0, 30, 10);
// spotLight.castShadow = true;
// scene.add(spotLight);

// // Hemisphere Light: A light source positioned directly above the scene, with color fading from the sky color to the ground color.
// var hemisphereLight = new THREE.HemisphereLight( '#ffffbb', '#080820', 0.1 );
// scene.add( hemisphereLight );

// // adding directional light, think of this as stage lighting, color then strength
// var directionalLight = new THREE.DirectionalLight('#d68cea', .90);
// directionalLight.position.set(1, 1, 1); // set its position
// directionalLight.castShadow = true;
// scene.add(directionalLight); // adding our directional light to the scene

// //---------------
// //   RENDERER
// //---------------

// // create renderer
// var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

// // set renderer size
// renderer.setSize(WIDTH, HEIGHT);
// renderer.setClearColor('#111');
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.shadowMap.enabled = true;

// // attach the render-supplied DOM element
// $container.appendChild(renderer.domElement);

// //---------------
// // SPIN & RENDER
// //---------------
  
// // create function that spins the cube when rendered
// var render = function () {
//   requestAnimationFrame( render );
//   saturn.rotation.y += 0.003;
//   renderer.render(scene, camera);
// };

// // call the render function we've just created
// render();

// // handeling window resize
// window.addEventListener('resize', onResize);
// function onResize() {
//   width = window.innerWidth;
//   height = window.innerHeight;
//   camera.aspect = width / height;
//   camera.updateProjectionMatrix();
//   renderer.setSize(width, height);
// }

/* eslint-enable */
