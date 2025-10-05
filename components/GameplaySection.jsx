import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function GameplaySection() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scroller: "[data-scroll-container]"
      }
    })

    tl.fromTo(contentRef.current.children,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.out" }
    )
    .fromTo(videoRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, ease: "power2.out" },
      "-=0.5"
    )
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center py-20"
      data-scroll-section
      id="gameplay"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={contentRef}>
            <h2 
              className="text-4xl md:text-6xl font-cyber font-bold mb-8 text-cyber-pink"
              data-scroll
              data-scroll-speed="1.5"
            >
              Epic Gameplay
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg">
              <p data-scroll data-scroll-speed="1">
                Experience heart-pounding action sequences where every decision shapes your destiny. 
                Navigate through sprawling cyberpunk cities, engage in tactical combat, and uncover 
                a conspiracy that threatens the very fabric of reality.
              </p>
              
              <p data-scroll data-scroll-speed="0.8">
                Master an arsenal of futuristic weapons, each with unique upgrade paths and 
                customization options. From plasma rifles to molecular disruptors, 
                the power to reshape the world is in your hands.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              <div className="flex items-center space-x-4" data-scroll data-scroll-speed="0.6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyber-blue to-cyber-pink rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Choose Your Path</h4>
                  <p className="text-gray-400">Select from multiple character archetypes and progression trees</p>
                </div>
              </div>

              <div className="flex items-center space-x-4" data-scroll data-scroll-speed="0.5">
                <div className="w-12 h-12 bg-gradient-to-r from-cyber-pink to-cyber-yellow rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Master Combat</h4>
                  <p className="text-gray-400">Learn advanced combat techniques and weapon combinations</p>
                </div>
              </div>

              <div className="flex items-center space-x-4" data-scroll data-scroll-speed="0.4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyber-yellow to-cyber-blue rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Shape Reality</h4>
                  <p className="text-gray-400">Make choices that permanently alter the game world</p>
                </div>
              </div>
            </div>

            <div className="mt-12" data-scroll data-scroll-speed="0.3">
              <button className="border-2 border-cyber-blue text-cyber-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyber-blue hover:text-black transition-all duration-300 mr-4">
                Download Demo
              </button>
              <button className="text-cyber-pink hover:text-white transition-colors duration-300 font-semibold text-lg">
                View Gallery →
              </button>
            </div>
          </div>

          <div ref={videoRef} className="relative" data-scroll data-scroll-speed="2">
            {/* Placeholder for gameplay video/screenshot */}
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-cyber-blue/30 aspect-video">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 to-cyber-pink/20"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-cyber-blue/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-cyber-blue" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-cyber-blue font-semibold">Play Gameplay Trailer</p>
                </div>
              </div>

              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-2xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-blue to-transparent opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-pink to-transparent opacity-50"></div>
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-cyber-yellow to-transparent opacity-50"></div>
                <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-cyber-blue to-transparent opacity-50"></div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -top-6 -right-6 bg-black/80 backdrop-blur-sm border border-cyber-blue/30 rounded-lg p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-blue">4.9★</div>
                <div className="text-xs text-gray-400">Player Rating</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-black/80 backdrop-blur-sm border border-cyber-pink/30 rounded-lg p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-pink">1M+</div>
                <div className="text-xs text-gray-400">Downloads</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GameplaySection