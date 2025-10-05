import * as THREE from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

import LocomotiveScroll from 'locomotive-scroll';

gsap.registerPlugin(ScrollTrigger);


// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#draw'),
    antialias: true,
    alpha:true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
renderer.outputEncoding = THREE.sRGBEncoding;

// Post processing setup
const composer = new EffectComposer(renderer);
const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);

const rgbShiftPass = new ShaderPass(RGBShiftShader);
rgbShiftPass.uniforms['amount'].value = 0.00030;
composer.addPass(rgbShiftPass);

let model;

// Load GLTF Model
const gltfLoader = new GLTFLoader();
gltfLoader.load('/DamagedHelmet.gltf', (gltf) => {
     model = gltf.scene;
    model.scale.set(2, 2, 2); // Scale the model
    model.position.set(0, 0, 0); // Position the model
    scene.add(model);
},undefined, (error)=>{
    console.error(error);
}

);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Camera position
camera.position.z =6;


// Load HDR environment map
const RGBELoade=new RGBELoader();
RGBELoade.load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/royal_esplanade_1k.hdr', function(texture) {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture;
        // scene.background = texture;
    });

 // module moving

 window.addEventListener('mousemove',(e)=>{
  if(model){
        gsap.to(model.rotation,{
            x:(e.clientY/window.innerHeight-0.5)*(Math.PI*0.4),
            y:(e.clientX/window.innerWidth-0.5)*(Math.PI*0.4),
            duration:1,
            ease:'power2.inout'
        })
  }
})

gsap.to(document.querySelector('#draw'),{
    duration:1,
    ease:'power2.inout',
    scrollTrigger:{
        trigger:'#draw',
        start:'top top',
        end:'bottom bottom',
        scrub:true,
        // markers:true
    }
})
gsap.to(document.querySelector('#draw'),{
    duration:2,
    x:"20vh",
    y:"100vh",
    ease:'power2.inout',
    scrollTrigger:{
        position:"fixed",
        trigger:document.querySelector('#draw1'),
        scroller:"body",
        markers:true,
        start:'top 70%',
        end:'bottem 30%',
        scrub:true,
    }
})


// Handle window resize
window.addEventListener('resize', () => {
    // Update camera
    camera.aspect = window.innerWidth / window.innerHeight ;
    
    // Update renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.updateProjectionMatrix();
    
    // Update composer
    composer.setSize(window.innerWidth, window.innerHeight);
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Render with post processing
    composer.render();
}

animate();
