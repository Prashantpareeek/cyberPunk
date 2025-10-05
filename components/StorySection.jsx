import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function StorySection() {
  const sectionRef = useRef(null)
  const timelineRef = useRef(null)

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll('.story-element')
    
    gsap.fromTo(elements,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.3,
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

  const storyEvents = [
    {
      year: "2087",
      title: "The Digital Awakening",
      description: "Artificial intelligence becomes sentient, leading to the first digital consciousness uprising."
    },
    {
      year: "2092",
      title: "Corporate Wars Begin",
      description: "Mega-corporations wage war for control of the neural networks and digital infrastructure."
    },
    {
      year: "2095",
      title: "The Great Disconnection",
      description: "Society splits between those connected to the neural web and those living offline."
    },
    {
      year: "2098",
      title: "Rise of the Resistance",
      description: "Underground hackers form SuperPluk, a resistance movement to liberate digital consciousness."
    },
    {
      year: "2101",
      title: "Your Story Begins",
      description: "As a new recruit, you must choose between corporate control or digital freedom."
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900"
      data-scroll-section
      id="story"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-6xl font-cyber font-bold mb-6 bg-gradient-to-r from-cyber-yellow to-cyber-pink bg-clip-text text-transparent story-element"
            data-scroll
            data-scroll-speed="2"
          >
            The SuperPluk Chronicles
          </h2>
          
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto story-element"
            data-scroll
            data-scroll-speed="1"
          >
            In a world where reality and virtuality merge, humanity faces its greatest challenge. 
            Dive into a narrative that spans decades of technological evolution and rebellion.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-1 h-full bg-gradient-to-b from-cyber-blue via-cyber-pink to-cyber-yellow"></div>

          <div className="space-y-16">
            {storyEvents.map((event, index) => (
              <div 
                key={index}
                className={`story-element flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                data-scroll
                data-scroll-speed={1 + index * 0.2}
              >
                {/* Timeline dot */}
                <div className="relative z-10 w-16 h-16 bg-gradient-to-r from-cyber-blue to-cyber-pink rounded-full flex items-center justify-center mb-4 md:mb-0 mx-8 flex-shrink-0">
                  <div className="w-8 h-8 bg-black rounded-full"></div>
                </div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="bg-gradient-to-br from-gray-800 to-black p-8 rounded-2xl border border-cyber-blue/30 hover:border-cyber-pink/50 transition-colors duration-500">
                    <div className="text-cyber-yellow font-cyber text-lg mb-2">{event.year}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{event.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 story-element">
          <button className="bg-gradient-to-r from-cyber-yellow to-cyber-pink px-8 py-4 rounded-full font-semibold text-black text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyber-yellow/50">
            Begin Your Journey
          </button>
        </div>
      </div>
    </section>
  )
}

export default StorySection