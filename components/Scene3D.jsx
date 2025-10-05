import React, { useRef, useEffect, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Environment, Float, Text, Sphere } from '@react-three/drei'
import { EffectComposer, ChromaticAberration, Glitch, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function ParticleField() {
  const particlesRef = useRef()
  const particleCount = 100
  
  const positions = new Float32Array(particleCount * 3)
  const colors = new Float32Array(particleCount * 3)
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    
    colors[i * 3] = Math.random()
    colors[i * 3 + 1] = Math.random() * 0.5 + 0.5
    colors[i * 3 + 2] = 1
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001
      particlesRef.current.rotation.x += 0.0005
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} vertexColors transparent opacity={0.8} />
    </points>
  )
}

function Model({ mousePosition }) {
  const { scene } = useGLTF('/DamagedHelmet.gltf')
  const modelRef = useRef()
  const [clonedScene, setClonedScene] = useState(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (scene) {
      const cloned = scene.clone()
      setClonedScene(cloned)
    }
  }, [scene])

  useFrame((state) => {
    if (modelRef.current && mousePosition) {
      // Enhanced mouse tracking with cyberpunk feel
      const targetX = (mousePosition.x - 0.5) * Math.PI * 0.4
      const targetY = (mousePosition.y - 0.5) * Math.PI * 0.4
      
      modelRef.current.rotation.x = THREE.MathUtils.lerp(
        modelRef.current.rotation.x,
        targetY + Math.sin(state.clock.elapsedTime * 0.5) * 0.1,
        0.03
      )
      modelRef.current.rotation.y = THREE.MathUtils.lerp(
        modelRef.current.rotation.y,
        targetX + state.clock.elapsedTime * 0.2,
        0.03
      )
      
      // Cyberpunk glow effect
      const scale = 2 + Math.sin(state.clock.elapsedTime * 2) * 0.1
      modelRef.current.scale.setScalar(scale)
    }

    // Floating animation with cyberpunk twist
    if (modelRef.current) {
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
      modelRef.current.position.z = Math.cos(state.clock.elapsedTime * 0.3) * 0.2
    }
  })

  useEffect(() => {
    if (modelRef.current) {
      // Enhanced entrance animation
      gsap.fromTo(modelRef.current.scale, 
        { x: 0, y: 0, z: 0 },
        {
          x: 2, y: 2, z: 2,
          duration: 3,
          ease: "elastic.out(1, 0.3)",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Cyberpunk movement based on scroll
      gsap.to(modelRef.current.position, {
        x: 3,
        y: 1,
        z: -2,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          scroller: "[data-scroll-container]"
        }
      })

      // Character section interaction
      gsap.to(modelRef.current.rotation, {
        y: Math.PI * 2,
        scrollTrigger: {
          trigger: "#characters",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          scroller: "[data-scroll-container]"
        }
      })
    }
  }, [clonedScene])

  if (!clonedScene) return null

  return (
    <group>
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
        <primitive
          ref={modelRef}
          object={clonedScene}
          scale={[0, 0, 0]}
          position={[0, 0, 0]}
          onPointerOver={() => setIsHovered(true)}
          onPointerOut={() => setIsHovered(false)}
        />
        
        {/* Cyberpunk energy rings around the helmet */}
        <group rotation={[0, 0, 0]}>
          <Sphere args={[3.5, 32, 32]} position={[0, 0, 0]}>
            <meshBasicMaterial 
              color="#00ffff" 
              transparent 
              opacity={0.1} 
              wireframe 
            />
          </Sphere>
          <Sphere args={[4, 32, 32]} position={[0, 0, 0]}>
            <meshBasicMaterial 
              color="#ff00ff" 
              transparent 
              opacity={0.05} 
              wireframe 
            />
          </Sphere>
        </group>

        {/* Holographic text */}
        {isHovered && (
          <Text
            position={[0, 4, 0]}
            fontSize={0.5}
            color="#00ffff"
            anchorX="center"
            anchorY="middle"
          >
            NEURAL INTERFACE
          </Text>
        )}
      </Float>
    </group>
  )
}

function CyberpunkLighting() {
  return (
    <>
      {/* Main lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      
      {/* Cyberpunk colored lights */}
      <pointLight position={[-5, 5, 5]} color="#00ffff" intensity={1} distance={20} />
      <pointLight position={[5, -5, -5]} color="#ff00ff" intensity={1} distance={20} />
      <pointLight position={[0, 10, -10]} color="#ffff00" intensity={0.8} distance={25} />
      
      {/* Rotating light for dynamic effects */}
      <group>
        <pointLight position={[8, 0, 0]} color="#00ff00" intensity={0.5} distance={15} />
      </group>
    </>
  )
}

function Scene3D() {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* Enhanced Lighting */}
      <CyberpunkLighting />

      {/* Environment */}
      <Environment
        files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/royal_esplanade_1k.hdr"
        background={false}
        intensity={0.5}
      />

      {/* Particle Field for Cyberpunk Atmosphere */}
      <ParticleField />

      {/* Main 3D Model */}
      <Model mousePosition={mousePosition} />

      {/* Enhanced Post Processing */}
      <EffectComposer>
        <ChromaticAberration offset={[0.003, 0.003]} />
        <Bloom 
          intensity={0.5} 
          luminanceThreshold={0.1} 
          luminanceSmoothing={0.9}
        />
        <Glitch 
          delay={[1.5, 3.5]} 
          duration={[0.1, 0.3]} 
          strength={[0.1, 0.3]}
          active
        />
      </EffectComposer>
    </>
  )
}

// Preload the model
useGLTF.preload('/DamagedHelmet.gltf')

export default Scene3D