import * as THREE from 'three-full';

//import * as OrbitControls from 'three-orbitcontrols';
// Using


// create a scene
const scene = new THREE.Scene();

// create a box
const geometry = new THREE.BoxGeometry(10, 10, 10);
const conegeometry = new THREE.ConeGeometry(3, 3, 3);
const spheregeometry = new THREE.SphereGeometry(2, 16, 16);

//var textureLoader = new THREE.TextureLoader();
var texture = new THREE.TextureLoader().load('models/Ground.png');
// we've gotta set this to use cross-origin images
var material = new THREE.MeshPhongMaterial({
  //  color: 0xffffff,
  flatShading: true,
  shininess: 80,
  map: texture
  //  specularMap: texture
  //  wireframe: true
});



// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// var material = new THREE.MeshLambertMaterial( {map: texture} );
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

var cone = new THREE.Mesh(conegeometry, material);
scene.add(cone);

var conesec = new THREE.Mesh(conegeometry, material);
scene.add(conesec);

var sphere = new THREE.Mesh(spheregeometry, material);
scene.add(sphere);


var spheresec = new THREE.Mesh(spheregeometry, material);
scene.add(spheresec);
//var material = new THREE.MeshLambertMaterial( {color: 0x00ff00} );


// add some light
const light = new THREE.PointLight(0xffffff);
light.position.set(10, 10, 35);
light.intensity = 2;
scene.add(light);

var softlight = new THREE.AmbientLight(0xffffff); // soft white light
scene.add(light);

// create a camera and set position
const camera = new THREE.PerspectiveCamera(75, (window.innerWidth / window.innerHeight), 0.1, 1000);
camera.position.z = 20;


// create a renderer & add to DOM
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);

// set & start rendering the scene
const render = () => {
  requestAnimationFrame(render);
  cube.rotation.x += 0.02;
  cube.rotation.y += 0.03;
  cube.rotation.z += 0.05;

  cone.translateZ(0.5);
  cone.position.x = 15;
  sphere.position.x = -15;

  cone.rotation.x += 0.05;
  cone.rotation.y += 0.03;
  cone.rotation.z += 0.02;

  conesec.translateZ(-0.5);
  conesec.position.x = 10;
  conesec.rotation.x += 0.05;
  conesec.rotation.y += 0.03;
  conesec.rotation.z += 0.02;

  spheresec.translateZ(0.5);
  spheresec.rotation.x += 0.05;
  spheresec.rotation.y += 0.03;
  spheresec.rotation.z += 0.02;

  sphere.translateZ(-0.5);
  sphere.rotation.x += 0.05;
  sphere.rotation.y += 0.03;
  sphere.rotation.z += 0.02;
  renderer.render(scene, camera);
};
render();

console.log('Here is your scene', scene);

// adapt camera & renderer to browser window resizing
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}, false);
