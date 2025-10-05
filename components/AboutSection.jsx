import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function AboutSection() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const elements = contentRef.current.children

    gsap.fromTo(elements, 
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scroller: "[data-scroll-container]"
        }
      }
    )
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="about-section min-h-screen flex items-center py-20"
      data-scroll-section
      id="about"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div ref={contentRef} className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 
              className="text-4xl md:text-6xl font-cyber font-bold mb-8 text-cyber-blue"
              data-scroll
              data-scroll-speed="1"
            >
              About SuperPluk
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p data-scroll data-scroll-speed="0.5">
                SuperPluk is not just a game—it's a revolution in cyberpunk gaming. 
                Set in a dystopian future where technology and humanity collide, 
                players navigate through neon-lit cityscapes filled with danger and opportunity.
              </p>
              
              <p data-scroll data-scroll-speed="0.3">
                With cutting-edge graphics, immersive storytelling, and dynamic gameplay mechanics, 
                SuperPluk delivers an unprecedented gaming experience that blurs the lines between 
                reality and virtual worlds.
              </p>
              
              <p data-scroll data-scroll-speed="0.2">
                Join millions of players worldwide as they hack, fight, and survive in a world 
                where every choice matters and every action has consequences.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center" data-scroll data-scroll-speed="0.4">
                <div className="text-3xl font-bold text-cyber-pink mb-2">500K+</div>
                <div className="text-sm text-gray-400">Active Players</div>
              </div>
              <div className="text-center" data-scroll data-scroll-speed="0.4">
                <div className="text-3xl font-bold text-cyber-yellow mb-2">50+</div>
                <div className="text-sm text-gray-400">Game Awards</div>
              </div>
              <div className="text-center" data-scroll data-scroll-speed="0.4">
                <div className="text-3xl font-bold text-cyber-blue mb-2">95%</div>
                <div className="text-sm text-gray-400">Player Rating</div>
              </div>
            </div>
          </div>

          <div className="relative" data-scroll data-scroll-speed="2">
            <div className="relative z-10 bg-gradient-to-br from-cyber-blue/20 to-cyber-pink/20 p-8 rounded-2xl backdrop-blur-sm border border-cyber-blue/30">
              <h3 className="text-2xl font-cyber font-bold mb-6 text-cyber-blue">
                Game Features
              </h3>
              
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyber-blue rounded-full"></div>
                  <span>Immersive Open World Environment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyber-pink rounded-full"></div>
                  <span>Advanced AI and Dynamic NPCs</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyber-yellow rounded-full"></div>
                  <span>Customizable Character Progression</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyber-blue rounded-full"></div>
                  <span>Real-time Multiplayer Combat</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyber-pink rounded-full"></div>
                  <span>Photorealistic Graphics Engine</span>
                </li>
              </ul>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyber-blue/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyber-pink/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection