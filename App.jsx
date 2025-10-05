import React, { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LocomotiveScroll from 'locomotive-scroll'

import Scene3D from './components/Scene3D'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import StorySection from './components/StorySection'
import CharactersSection from './components/CharactersSection'
import FeaturesSection from './components/FeaturesSection'
import GameplaySection from './components/GameplaySection'
import SystemRequirementsSection from './components/SystemRequirementsSection'
import NewsSection from './components/NewsSection'
import FooterSection from './components/FooterSection'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const scrollRef = useRef(null)
  const locomotiveScrollRef = useRef(null)

  useEffect(() => {
    // Initialize Locomotive Scroll with error handling
    try {
      locomotiveScrollRef.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
        class: 'is-revealed',
        scrollFromAnywhere: false,
        touchMultiplier: 2,
        smoothMobile: true,
        smartphone: {
          smooth: true
        },
        tablet: {
          smooth: true
        }
      })

      // Update ScrollTrigger
      locomotiveScrollRef.current.on('scroll', ScrollTrigger.update)

      ScrollTrigger.scrollerProxy(scrollRef.current, {
        scrollTop(value) {
          return arguments.length
            ? locomotiveScrollRef.current.scrollTo(value, 0, 0)
            : locomotiveScrollRef.current.scroll.instance.scroll.y
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          }
        },
        pinType: scrollRef.current.style.transform ? 'transform' : 'fixed'
      })

      ScrollTrigger.addEventListener('refresh', () => locomotiveScrollRef.current.update())
      ScrollTrigger.refresh()
    } catch (error) {
      console.log('Locomotive Scroll initialization failed, falling back to normal scroll:', error)
    }

    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy()
      }
      ScrollTrigger.removeEventListener('refresh', () => locomotiveScrollRef.current?.update())
    }
  }, [])

  return (
    <div className="bg-black text-white overflow-hidden">
      <Navigation />
      
      <div ref={scrollRef} data-scroll-container className="relative z-20 pointer-events-auto">
        <HeroSection />
        <AboutSection />
        <StorySection />
        <CharactersSection />
        <FeaturesSection />
        <GameplaySection />
        <SystemRequirementsSection />
        <NewsSection />
        <FooterSection />
      </div>

      {/* Prominent 3D Scene - Full Screen */}
      <div className="fixed inset-0 z-10">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: "high-performance",
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.2
          }}
          dpr={[1, 2]}
        >
          <Scene3D />
        </Canvas>
      </div>

      {/* Interactive UI overlay for 3D model */}
      <div className="fixed top-20 right-8 z-30 hidden lg:block">
        <div className="bg-black/80 backdrop-blur-sm border border-cyber-blue/30 rounded-xl p-4 max-w-xs">
          <div className="text-cyber-green font-mono text-xs mb-2">NEURAL_INTERFACE.STATUS</div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Power:</span>
              <span className="text-cyber-blue">ONLINE</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Signal:</span>
              <span className="text-cyber-green">STRONG</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Mode:</span>
              <span className="text-cyber-yellow">INTERACTIVE</span>
            </div>
          </div>
          <div className="mt-3 text-xs text-gray-500">
            Move mouse to interact with neural helmet
          </div>
        </div>
      </div>
    </div>
  )
}

export default App