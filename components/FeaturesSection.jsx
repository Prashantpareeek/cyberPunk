import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function FeatureCard({ title, description, icon, delay = 0 }) {
  const cardRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(cardRef.current,
      { y: 100, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        delay: delay,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          scroller: "[data-scroll-container]"
        }
      }
    )
  }, [delay])

  return (
    <div 
      ref={cardRef}
      className="group relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-cyber-blue/30 hover:border-cyber-blue transition-all duration-500 hover:scale-105"
      data-scroll
      data-scroll-speed="1"
    >
      <div className="text-4xl mb-6 text-cyber-blue group-hover:text-cyber-pink transition-colors duration-300">
        {icon}
      </div>
      
      <h3 className="text-2xl font-cyber font-bold mb-4 text-white group-hover:text-cyber-blue transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 to-cyber-pink/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  )
}

function FeaturesSection() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          scroller: "[data-scroll-container]"
        }
      }
    )
  }, [])

  const features = [
    {
      title: "Neural Interface",
      description: "Connect directly to the digital realm with advanced neural interfaces that blur the line between mind and machine.",
      icon: "🧠",
      delay: 0.1
    },
    {
      title: "Quantum Combat",
      description: "Experience next-generation combat mechanics with quantum-powered weapons and time-dilated battle sequences.",
      icon: "⚡",
      delay: 0.2
    },
    {
      title: "AI Companions",
      description: "Partner with advanced AI entities that evolve and adapt to your playstyle, becoming true digital allies.",
      icon: "🤖",
      delay: 0.3
    },
    {
      title: "Cyber Enhancement",
      description: "Upgrade your character with cutting-edge cybernetic implants that unlock new abilities and gameplay mechanics.",
      icon: "🔧",
      delay: 0.4
    },
    {
      title: "Virtual Economies",
      description: "Participate in complex digital economies where virtual assets have real value and impact on the game world.",
      icon: "💎",
      delay: 0.5
    },
    {
      title: "Reality Hacking",
      description: "Manipulate the very fabric of the digital world through advanced hacking mechanics and reality alteration.",
      icon: "🌐",
      delay: 0.6
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen py-20"
      data-scroll-section
      id="features"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-6xl font-cyber font-bold mb-6 bg-gradient-to-r from-cyber-blue to-cyber-pink bg-clip-text text-transparent"
            data-scroll
            data-scroll-speed="2"
          >
            Advanced Features
          </h2>
          
          <p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            data-scroll
            data-scroll-speed="1"
          >
            Discover the cutting-edge technologies and innovative gameplay mechanics that make SuperPluk 
            the most advanced cyberpunk gaming experience ever created.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={feature.delay}
            />
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16" data-scroll data-scroll-speed="0.5">
          <button className="bg-gradient-to-r from-cyber-blue to-cyber-pink px-8 py-4 rounded-full font-semibold text-black text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyber-blue/50">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection