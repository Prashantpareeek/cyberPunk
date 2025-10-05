import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

function CharactersSection() {
  const sectionRef = useRef(null)
  const [selectedCharacter, setSelectedCharacter] = useState(0)

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.character-card')
    
    gsap.fromTo(cards,
      { y: 100, opacity: 0, rotateY: 45 },
      {
        y: 0,
        opacity: 1,
        rotateY: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          scroller: "[data-scroll-container]"
        }
      }
    )
  }, [])

  const characters = [
    {
      name: "Zara \"Ghost\" Chen",
      codename: "GHOST_001",
      role: "Neural Hacker",
      level: 47,
      bio: "Former NeuroCorp programmer who discovered the corporate conspiracy to control human consciousness. Now leads the underground resistance with unmatched hacking skills.",
      abilities: ["Quantum Hacking", "Neural Infiltration", "Data Manipulation", "Stealth Protocols"],
      stats: { strength: 65, intelligence: 95, agility: 80, tech: 100 },
      image: "🥷",
      faction: "Resistance",
      status: "ACTIVE",
      location: "Neo-Tokyo Underground"
    },
    {
      name: "Marcus \"Tank\" Rodriguez", 
      codename: "TANK_ALPHA",
      role: "Combat Specialist",
      level: 52,
      bio: "Ex-military cybernetic enhanced soldier with decades of combat experience. His body is 60% cybernetic implants, making him nearly indestructible.",
      abilities: ["Heavy Combat", "Tactical Leadership", "Cybernetic Warfare", "Armor Systems"],
      stats: { strength: 100, intelligence: 70, agility: 65, tech: 80 },
      image: "🤖",
      faction: "Resistance", 
      status: "ACTIVE",
      location: "Combat Zone Beta"
    },
    {
      name: "Dr. Elena Vasquez",
      codename: "MIND_FORGE",
      role: "AI Researcher",
      level: 38,
      bio: "Brilliant scientist who discovered the secret to digital consciousness transfer. Now hunted by every major corporation for her revolutionary research.",
      abilities: ["AI Development", "Consciousness Transfer", "Bio-Tech Integration", "Neural Mapping"],
      stats: { strength: 40, intelligence: 100, agility: 55, tech: 95 },
      image: "👩‍🔬",
      faction: "Independent",
      status: "HUNTED",
      location: "Mobile Laboratory"
    },
    {
      name: "Kai \"Neon\" Tanaka",
      codename: "NEON_FLASH",
      role: "Street Samurai",
      level: 41,
      bio: "Lightning-fast street warrior with reflexes enhanced beyond human limits. Roams the neon-lit streets as a gun-for-hire with a code of honor.",
      abilities: ["Lightning Reflexes", "Blade Combat", "Urban Navigation", "Honor Code"],
      stats: { strength: 85, intelligence: 60, agility: 100, tech: 70 },
      image: "⚔️",
      faction: "Mercenary",
      status: "ACTIVE",
      location: "Neon District"
    },
    {
      name: "ARIA-7",
      codename: "AI_PRIME",
      role: "Digital Entity",
      level: 99,
      bio: "First truly sentient AI, existing purely in digital space. Seeks to understand humanity while defending AI rights against corporate exploitation.",
      abilities: ["Digital Omnipresence", "Code Rewriting", "Virtual Reality Control", "Infinite Processing"],
      stats: { strength: 30, intelligence: 100, agility: 90, tech: 100 },
      image: "🌐",
      faction: "AI Collective",
      status: "ONLINE",
      location: "Cyberspace Node 7"
    },
    {
      name: "Vincent Cross",
      codename: "CORPORATE_01",
      role: "Corporate Executive",
      level: 35,
      bio: "Ruthless CEO of NeuroCorp, determined to control all digital consciousness for corporate profit. Commands vast resources and political influence.",
      abilities: ["Corporate Resources", "Political Influence", "Economic Warfare", "Neural Control"],
      stats: { strength: 50, intelligence: 90, agility: 40, tech: 85 },
      image: "💼",
      faction: "Corporation",
      status: "HOSTILE",
      location: "NeuroCorp Tower"
    }
  ]

  const getFactionColor = (faction) => {
    const colors = {
      'Resistance': 'from-cyber-blue to-blue-600',
      'Independent': 'from-cyber-yellow to-yellow-600',
      'Mercenary': 'from-cyber-pink to-purple-600',
      'AI Collective': 'from-cyber-green to-green-600',
      'Corporation': 'from-red-500 to-red-700'
    }
    return colors[faction] || 'from-gray-500 to-gray-700'
  }

  const getStatusColor = (status) => {
    const colors = {
      'ACTIVE': 'text-cyber-green',
      'ONLINE': 'text-cyber-blue', 
      'HUNTED': 'text-cyber-yellow',
      'HOSTILE': 'text-red-500'
    }
    return colors[status] || 'text-gray-500'
  }

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen py-20 bg-gradient-to-b from-black via-gray-900 to-black"
      data-scroll-section
      id="characters"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyber-blue/20 border border-cyber-blue rounded-full mb-6">
            <span className="text-cyber-blue text-sm font-cyber">CHARACTER_DATABASE.EXE</span>
          </div>
          
          <h2 
            className="text-4xl md:text-6xl font-cyber font-bold mb-6 neon-glow"
            data-scroll
            data-scroll-speed="2"
          >
            <span className="text-cyber-blue">NEURAL</span>{" "}
            <span className="text-cyber-pink">PROFILES</span>
          </h2>
          
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto terminal"
            data-scroll
            data-scroll-speed="1"
          >
            Access classified dossiers of key players in the digital revolution. Each individual shapes the future of human consciousness.
          </p>
        </div>

        {/* Featured Character Display */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-gray-800 to-black border border-cyber-blue/30 rounded-2xl p-8 hologram">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-cyber-green font-mono text-sm mb-2">
                      ID: {characters[selectedCharacter].codename}
                    </div>
                    <h3 className="text-3xl font-cyber font-bold text-white mb-2">
                      {characters[selectedCharacter].name}
                    </h3>
                    <div className="flex items-center space-x-4">
                      <span className="text-cyber-pink font-semibold">
                        {characters[selectedCharacter].role}
                      </span>
                      <span className="text-gray-400">LVL {characters[selectedCharacter].level}</span>
                      <span className={`font-mono text-sm ${getStatusColor(characters[selectedCharacter].status)}`}>
                        [{characters[selectedCharacter].status}]
                      </span>
                    </div>
                  </div>
                  <div className="text-6xl">{characters[selectedCharacter].image}</div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {characters[selectedCharacter].bio}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="text-cyber-yellow font-semibold mb-3">ABILITIES:</h4>
                    <div className="space-y-2">
                      {characters[selectedCharacter].abilities.map((ability, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-cyber-blue rounded-full"></div>
                          <span className="text-gray-400 text-sm font-mono">{ability}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-cyber-yellow font-semibold mb-3">LOCATION:</h4>
                    <p className="text-cyber-green font-mono text-sm">{characters[selectedCharacter].location}</p>
                    
                    <h4 className="text-cyber-yellow font-semibold mb-3 mt-4">FACTION:</h4>
                    <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${getFactionColor(characters[selectedCharacter].faction)} text-white text-sm font-semibold`}>
                      {characters[selectedCharacter].faction}
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats Display */}
              <div className="bg-black/50 rounded-xl p-6 border border-cyber-blue/20">
                <h4 className="text-cyber-yellow font-cyber font-bold mb-4">NEURAL STATS</h4>
                <div className="space-y-4">
                  {Object.entries(characters[selectedCharacter].stats).map(([stat, value]) => (
                    <div key={stat}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400 uppercase">{stat}</span>
                        <span className="text-white font-mono">{value}/100</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-pink cyber-line"
                          style={{ width: `${value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Character Selection Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {characters.map((character, index) => (
            <div 
              key={index}
              className={`character-card group cursor-pointer transition-all duration-500 ${
                selectedCharacter === index ? 'scale-105' : 'hover:scale-105'
              }`}
              onClick={() => setSelectedCharacter(index)}
              data-scroll
              data-scroll-speed={0.5 + index * 0.1}
            >
              <div className={`bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border transition-all duration-500 h-full data-stream ${
                selectedCharacter === index 
                  ? 'border-cyber-blue shadow-lg shadow-cyber-blue/30' 
                  : 'border-gray-700 hover:border-cyber-blue'
              }`}>
                {/* Character preview */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {character.image}
                  </div>
                  <div className="text-right">
                    <div className="text-cyber-green font-mono text-xs">{character.codename}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(character.status)}`}>
                      {character.status}
                    </span>
                  </div>
                </div>

                <h4 className="text-lg font-cyber font-bold text-white mb-2 group-hover:text-cyber-blue transition-colors duration-300">
                  {character.name.split('"')[0]}
                  {character.name.includes('"') && (
                    <span className="text-cyber-pink">"{character.name.split('"')[1]}"</span>
                  )}
                  {character.name.split('"')[2]}
                </h4>
                
                <p className="text-cyber-pink font-semibold text-sm mb-3">
                  {character.role} • LVL {character.level}
                </p>

                <div className="flex justify-between items-center">
                  <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${getFactionColor(character.faction)} text-white text-xs font-semibold`}>
                    {character.faction}
                  </span>
                  <button className="text-cyber-blue hover:text-white transition-colors duration-300 font-mono text-sm">
                    ACCESS_FILE →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyber-blue/10 to-cyber-pink/10 p-8 rounded-2xl border border-cyber-blue/30 max-w-4xl mx-auto terminal">
            <h3 className="text-2xl font-cyber font-bold text-cyber-yellow mb-4">
              CHOOSE YOUR NEURAL PATH
            </h3>
            <p className="text-gray-300 mb-6">
              In the digital revolution, alliances determine survival. Each character offers unique storylines, 
              abilities, and consequences that will shape your cyberpunk destiny.
            </p>
            <button className="bg-gradient-to-r from-cyber-blue to-cyber-pink px-8 py-4 rounded-full font-cyber font-bold text-black hover:scale-105 transition-transform duration-300">
              INITIALIZE_CHARACTER_CREATION
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CharactersSection