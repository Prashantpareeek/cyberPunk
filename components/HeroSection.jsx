import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

function HeroSection() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const glitchRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 1.5 })
    
    // Glitch effect for cyberpunk feel
    gsap.to(glitchRef.current, {
      duration: 0.1,
      skewX: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    })
    
    tl.fromTo(titleRef.current, 
      { y: 100, opacity: 0, rotationX: 90 },
      { y: 0, opacity: 1, rotationX: 0, duration: 2, ease: "power2.out" }
    )
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" },
      "-=1"
    )
    .fromTo(ctaRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.5"
    )
  }, [])

  return (
    <section 
      ref={heroRef}
      className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden"
      data-scroll-section
    >
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid-background"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyber-blue rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main 3D Model Area - Large Space */}
      <div className="w-full max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-20 relative">
        {/* 3D Model Showcase */}
        <div className="relative">
          <div className="text-center lg:text-left mb-8">
            <div className="inline-block px-4 py-2 bg-cyber-blue/20 border border-cyber-blue rounded-full mb-6">
              <span className="text-cyber-blue text-sm font-cyber">NEURAL INTERFACE ACTIVATED</span>
            </div>
            
            <h1 
              ref={titleRef}
              className="text-4xl lg:text-7xl font-cyber font-black mb-6 leading-tight"
              data-scroll
              data-scroll-speed="1"
            >
              <span className="bg-gradient-to-r from-cyber-blue via-cyber-pink to-cyber-yellow bg-clip-text text-transparent">
                CYBER
              </span>
              <br />
              <span ref={glitchRef} className="text-white cyber-glitch">
                PUNK
              </span>
              <br />
              <span className="text-cyber-pink">
                2087
              </span>
            </h1>
          </div>

          {/* 3D Model Info Panel */}
          <div className="bg-black/60 backdrop-blur-sm border border-cyber-blue/30 rounded-xl p-6 mb-6">
            <h3 className="text-cyber-yellow font-cyber text-lg mb-4">NEURAL HELMET v2.4</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-400">Status:</span>
                <span className="text-green-400 ml-2">ONLINE</span>
              </div>
              <div>
                <span className="text-gray-400">Neural Link:</span>
                <span className="text-cyber-blue ml-2">ACTIVE</span>
              </div>
              <div>
                <span className="text-gray-400">Encryption:</span>
                <span className="text-cyber-pink ml-2">QUANTUM</span>
              </div>
              <div>
                <span className="text-gray-400">AI Level:</span>
                <span className="text-cyber-yellow ml-2">GRADE-A</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="space-y-8">
          <div 
            ref={subtitleRef}
            className="space-y-6"
            data-scroll
            data-scroll-speed="0.5"
          >
            <div className="border-l-4 border-cyber-pink pl-6">
              <h2 className="text-2xl lg:text-4xl font-cyber font-bold text-white mb-4">
                WELCOME TO THE DIGITAL REVOLUTION
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                In 2087, the line between human consciousness and artificial intelligence has been erased. 
                Neural implants grant superhuman abilities, but at what cost?
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-cyber-blue/10 rounded-lg border border-cyber-blue/30">
                <div className="text-2xl font-bold text-cyber-blue">2087</div>
                <div className="text-xs text-gray-400">YEAR</div>
              </div>
              <div className="text-center p-4 bg-cyber-pink/10 rounded-lg border border-cyber-pink/30">
                <div className="text-2xl font-bold text-cyber-pink">∞</div>
                <div className="text-xs text-gray-400">POSSIBILITIES</div>
              </div>
              <div className="text-center p-4 bg-cyber-yellow/10 rounded-lg border border-cyber-yellow/30">
                <div className="text-2xl font-bold text-cyber-yellow">01</div>
                <div className="text-xs text-gray-400">CHOICE</div>
              </div>
            </div>
          </div>

          <div 
            ref={ctaRef}
            className="space-y-6"
            data-scroll
            data-scroll-speed="0.3"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative overflow-hidden bg-gradient-to-r from-cyber-blue to-cyber-pink px-8 py-4 rounded-full font-cyber font-bold text-black text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyber-blue/50">
                <span className="relative z-10">JACK IN NOW</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              
              <button className="group border-2 border-cyber-yellow text-cyber-yellow px-8 py-4 rounded-full font-cyber font-bold text-lg transition-all duration-300 hover:bg-cyber-yellow hover:text-black relative overflow-hidden">
                <span className="relative z-10">VIEW NEURAL DATA</span>
              </button>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>12.7M Neural Links Active</span>
              </div>
              <div className="w-1 h-4 bg-gray-600"></div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyber-blue rounded-full animate-pulse"></div>
                <span>Real-time Synchronization</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal-style scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        data-scroll
        data-scroll-speed="-1"
      >
        <div className="text-center">
          <div className="text-cyber-green font-mono text-sm mb-2">&gt; SCROLL_TO_CONTINUE</div>
          <div className="w-6 h-10 border-2 border-cyber-green rounded-full flex justify-center animate-bounce">
            <div className="w-1 h-3 bg-cyber-green rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Side UI Elements */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="space-y-4">
          <div className="w-12 h-1 bg-cyber-blue"></div>
          <div className="w-8 h-1 bg-cyber-pink"></div>
          <div className="w-12 h-1 bg-cyber-yellow"></div>
          <div className="w-6 h-1 bg-cyber-green"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection