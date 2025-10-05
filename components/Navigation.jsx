import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

function Navigation() {
  const navRef = useRef(null)

  useEffect(() => {
    // Animate navigation on load
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.5 }
    )
  }, [])

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 p-6 md:p-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img 
            src="https://i.redd.it/3d-rendered-the-cyberpunk-logo-using-blender-v0-khopj82wqee91.png?width=1920&format=png&auto=webp&s=f42dbd8f5c04aedb9ba9291c1ba4d679029cc1f3" 
            className="w-16 md:w-24 h-auto" 
            alt="SuperPluk Logo"
          />
          <h1 className="text-xl md:text-2xl font-cyber font-bold text-cyber-blue tracking-wider">
            SuperPluk
          </h1>
        </div>
        
        <div className="hidden lg:flex space-x-6">
          <a href="#about" className="text-white hover:text-cyber-blue transition-colors duration-300 text-sm">
            About
          </a>
          <a href="#story" className="text-white hover:text-cyber-blue transition-colors duration-300 text-sm">
            Story
          </a>
          <a href="#characters" className="text-white hover:text-cyber-blue transition-colors duration-300 text-sm">
            Characters
          </a>
          <a href="#features" className="text-white hover:text-cyber-blue transition-colors duration-300 text-sm">
            Features
          </a>
          <a href="#gameplay" className="text-white hover:text-cyber-blue transition-colors duration-300 text-sm">
            Gameplay
          </a>
          <a href="#requirements" className="text-white hover:text-cyber-blue transition-colors duration-300 text-sm">
            System
          </a>
          <a href="#news" className="text-white hover:text-cyber-blue transition-colors duration-300 text-sm">
            News
          </a>
          <a href="#contact" className="text-white hover:text-cyber-blue transition-colors duration-300 text-sm">
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button className="text-white hover:text-cyber-blue transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <button className="bg-gradient-to-r from-cyber-blue to-cyber-pink px-6 py-2 rounded-full font-semibold text-black hover:scale-105 transition-transform duration-300">
          Play Now
        </button>
      </div>
    </nav>
  )
}

export default Navigation