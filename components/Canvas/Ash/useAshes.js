export default function useDrawAshes(canvasRef) {
  const WIDTH = window.innerWidth;
  const HEIGHT = window.innerHeight;
  const xSpeed = 0.0005;
  const ySpeed = 0.001;
  let camera = null;
  let scene = null;
  let renderer = null;
  let particles = null;
  let points = null;
  let particleCount = 1300;
  let material = null;
  const $container = ref(canvasRef);

  async function init() {
    await setScene();
    await setCamera();
    await setObject();
    await setRenderer();
    render();
  }

  function render() {
    requestAnimationFrame(render);

    scene.rotation.y += xSpeed;

    let i = particleCount;
    while (i--) {
      let particle = particles.vertices[i];

      if (particle.y > 500) {
        particle.y = -500;
        particle.velocity.y = Math.random();
      }
      particle.velocity.y += Math.random() * ySpeed;

      particle.add(particle.velocity);
    }
    points.geometry.verticesNeedUpdate = true;

    camera.lookAt(scene.position);
    renderer.render(scene, camera);
  }

  async function setScene() {
    scene = new THREE.Scene();
  }

  async function setCamera() {
    camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 1, 1000);
    camera.position.z = 1500;
  }

  async function setObject() {
    material = new THREE.PointsMaterial({
      color: 0xb25e9a,
      size: 3,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    particles = new THREE.Geometry();
    let particle;

    for (let i = 0; i < particleCount; i++) {
      const px = Math.random() * 2000 - 1000;
      const py = Math.random() * 2000 - 1000;
      const pz = Math.random() * 2000 - 1000;
      particle = new THREE.Vector3(px, py, pz);
      particle.velocity = new THREE.Vector3(0, Math.random(), 0);
      particles.vertices.push(particle);
    }

    points = new THREE.Points(particles, material);
    points.sortParticles = true;

    scene.add(points);
  }

  async function setRenderer() {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(WIDTH, HEIGHT);
    $container.value.appendChild(renderer.domElement);
  }

  function onResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
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
