import * as THREE from 'https://unpkg.com/three@0.166.1/build/three.module.js';

// ======================
// ESCENA
// ======================

const scene = new THREE.Scene();

// ======================
// CÁMARA
// ======================

const camera = new THREE.PerspectiveCamera(

45,

window.innerWidth/window.innerHeight,

0.1,

1000

);

camera.position.z = 12;

// ======================
// RENDER
// ======================

const renderer = new THREE.WebGLRenderer({

    antialias:true,

    alpha:true

});

renderer.setSize(

window.innerWidth,

window.innerHeight

);

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setClearColor(0x000000,0);

document.getElementById("scene").appendChild(renderer.domElement);

// ======================
// ESFERA
// ======================

const geometry = new THREE.SphereGeometry(

3,

64,

64

);

const material = new THREE.MeshBasicMaterial({

    color:"#fff4eb",

    wireframe:true

});

const sphere = new THREE.Mesh(

geometry,

material

);

scene.add(sphere);

// ======================
// ANIMACIÓN
// ======================

function animate(){

    requestAnimationFrame(animate);

    sphere.rotation.y += 0.003;

    sphere.rotation.x += 0.0015;

    renderer.render(

        scene,

        camera

    );

}

animate();

// ======================
// RESPONSIVE
// ======================

window.addEventListener("resize",()=>{

    camera.aspect = window.innerWidth/window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(

        window.innerWidth,

        window.innerHeight

    );

});