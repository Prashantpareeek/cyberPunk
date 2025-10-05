import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

function SystemRequirementsSection() {
  const sectionRef = useRef(null)
  const [activeTab, setActiveTab] = useState('minimum')

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll('.req-element')
    
    gsap.fromTo(elements,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          scroller: "[data-scroll-container]"
        }
      }
    )
  }, [])

  const requirements = {
    minimum: {
      os: "Windows 10 64-bit / macOS 10.15 / Ubuntu 18.04",
      processor: "Intel i5-8400 / AMD Ryzen 5 2600",
      memory: "8 GB RAM",
      graphics: "NVIDIA GTX 1060 / AMD RX 580",
      directX: "Version 12",
      network: "Broadband Internet connection",
      storage: "50 GB available space",
      soundCard: "DirectX compatible",
      notes: "These specs will run the game at 1080p with medium settings at 30 FPS."
    },
    recommended: {
      os: "Windows 11 64-bit / macOS 12.0 / Ubuntu 20.04",
      processor: "Intel i7-10700K / AMD Ryzen 7 3700X",
      memory: "16 GB RAM",
      graphics: "NVIDIA RTX 3070 / AMD RX 6700 XT",
      directX: "Version 12",
      network: "Broadband Internet connection",
      storage: "50 GB available space (SSD recommended)",
      soundCard: "DirectX compatible with 7.1 surround sound",
      notes: "These specs will run the game at 1440p with high settings at 60 FPS."
    },
    ultimate: {
      os: "Windows 11 64-bit / macOS 13.0 / Ubuntu 22.04",
      processor: "Intel i9-12900K / AMD Ryzen 9 5900X",
      memory: "32 GB RAM",
      graphics: "NVIDIA RTX 4080 / AMD RX 7800 XT",
      directX: "Version 12",
      network: "Broadband Internet connection",
      storage: "100 GB available space (NVMe SSD)",
      soundCard: "High-fidelity DAC with 7.1 surround sound",
      notes: "These specs will run the game at 4K with ultra settings at 60+ FPS with ray tracing enabled."
    }
  }

  const platforms = [
    {
      name: "PC (Steam)",
      icon: "🖥️",
      status: "Available Now",
      features: ["Full mod support", "Ultra-wide support", "Ray tracing", "DLSS/FSR"]
    },
    {
      name: "PlayStation 5",
      icon: "🎮",
      status: "Available Now", 
      features: ["DualSense haptics", "3D Audio", "4K/60fps", "Activity cards"]
    },
    {
      name: "Xbox Series X|S",
      icon: "🎯",
      status: "Available Now",
      features: ["Smart Delivery", "Quick Resume", "120fps mode", "Auto HDR"]
    },
    {
      name: "Nintendo Switch",
      icon: "🔄",
      status: "Coming 2025",
      features: ["Portable play", "Touch controls", "HD Rumble", "Cloud saves"]
    },
    {
      name: "Mobile (iOS/Android)",
      icon: "📱", 
      status: "Coming 2025",
      features: ["Touch optimized", "Cloud saves", "Cross-platform", "Offline mode"]
    },
    {
      name: "VR Platforms",
      icon: "🥽",
      status: "In Development",
      features: ["Full VR mode", "Hand tracking", "Room scale", "Haptic feedback"]
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-black"
      data-scroll-section
      id="requirements"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-6xl font-cyber font-bold mb-6 text-cyber-pink req-element"
            data-scroll
            data-scroll-speed="2"
          >
            System Requirements
          </h2>
          
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto req-element"
            data-scroll
            data-scroll-speed="1"
          >
            SuperPluk is optimized for modern gaming hardware with scalable settings 
            to ensure great performance across a wide range of systems.
          </p>
        </div>

        {/* Requirements tabs */}
        <div className="mb-12 req-element">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.keys(requirements).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-cyber-blue to-cyber-pink text-black'
                    : 'border-2 border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-black p-8 rounded-2xl border border-cyber-blue/30">
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(requirements[activeTab]).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-400 capitalize font-semibold">
                    {key.replace(/([A-Z])/g, ' $1').trim()}:
                  </span>
                  <span className="text-white text-right max-w-xs">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Platform availability */}
        <div className="req-element">
          <h3 className="text-3xl font-cyber font-bold text-center mb-12 text-cyber-yellow">
            Available Platforms
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800 to-black p-6 rounded-2xl border border-gray-700 hover:border-cyber-pink transition-all duration-500 hover:scale-105"
                data-scroll
                data-scroll-speed={0.5 + index * 0.1}
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{platform.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-2">{platform.name}</h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    platform.status === 'Available Now' 
                      ? 'bg-green-500 text-black'
                      : platform.status === 'Coming 2025'
                      ? 'bg-yellow-500 text-black'
                      : 'bg-blue-500 text-white'
                  }`}>
                    {platform.status}
                  </span>
                </div>

                <ul className="space-y-2">
                  {platform.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyber-blue rounded-full"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Download section */}
        <div className="mt-16 text-center req-element">
          <div className="bg-gradient-to-r from-cyber-blue/10 to-cyber-pink/10 p-8 rounded-2xl border border-cyber-blue/30">
            <h3 className="text-2xl font-cyber font-bold text-white mb-4">
              Ready to Enter the Digital Revolution?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Download SuperPluk now and join millions of players in the ultimate cyberpunk gaming experience. 
              Free demo available on all platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyber-blue to-cyber-pink px-8 py-4 rounded-full font-semibold text-black text-lg hover:scale-105 transition-all duration-300">
                Download Free Demo
              </button>
              <button className="border-2 border-cyber-yellow text-cyber-yellow px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyber-yellow hover:text-black transition-all duration-300">
                Pre-order Full Game
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SystemRequirementsSection