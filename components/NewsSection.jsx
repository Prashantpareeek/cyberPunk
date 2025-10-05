import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

function NewsSection() {
  const sectionRef = useRef(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.news-card')
    
    gsap.fromTo(cards,
      { y: 80, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
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

  const newsArticles = [
    {
      id: 1,
      title: "SuperPluk Wins 'Game of the Year' at Digital Awards 2024",
      excerpt: "SuperPluk takes home the most prestigious award in gaming, recognizing its groundbreaking approach to cyberpunk storytelling and innovative gameplay mechanics.",
      date: "October 1, 2025",
      category: "awards",
      image: "🏆",
      readTime: "3 min read",
      featured: true
    },
    {
      id: 2,
      title: "New DLC 'Neural Uprising' Announced for Q1 2025",
      excerpt: "Expand your SuperPluk experience with an all-new storyline featuring enhanced AI companions and revolutionary neural interface mechanics.",
      date: "September 28, 2025",
      category: "updates",
      image: "🧠",
      readTime: "5 min read",
      featured: false
    },
    {
      id: 3,
      title: "Community Spotlight: Player-Created Mods",
      excerpt: "Discover the most creative and innovative mods created by the SuperPluk community, from new weapons to entirely new game modes.",
      date: "September 25, 2025",
      category: "community",
      image: "🛠️",
      readTime: "4 min read",
      featured: false
    },
    {
      id: 4,
      title: "Developer Diary: Creating the Perfect Cyberpunk World",
      excerpt: "Lead Developer Sarah Chen discusses the creative process behind SuperPluk's immersive world design and the challenges of building a believable digital future.",
      date: "September 22, 2025",
      category: "development",
      image: "👩‍💻",
      readTime: "8 min read",
      featured: false
    },
    {
      id: 5,
      title: "E-Sports Tournament: SuperPluk Championship 2025",
      excerpt: "The biggest SuperPluk tournament yet is coming this December. $1M prize pool, 64 teams, and the ultimate test of cyberpunk skills.",
      date: "September 20, 2025",
      category: "esports",
      image: "🎯",
      readTime: "6 min read",
      featured: true
    },
    {
      id: 6,
      title: "Patch 2.4.1: Performance Improvements and Bug Fixes",
      excerpt: "Latest update brings significant performance improvements, fixes critical bugs, and introduces quality-of-life features requested by the community.",
      date: "September 18, 2025",
      category: "updates",
      image: "🔧",
      readTime: "2 min read",
      featured: false
    }
  ]

  const categories = [
    { id: 'all', name: 'All News', count: newsArticles.length },
    { id: 'updates', name: 'Updates', count: newsArticles.filter(a => a.category === 'updates').length },
    { id: 'community', name: 'Community', count: newsArticles.filter(a => a.category === 'community').length },
    { id: 'esports', name: 'E-Sports', count: newsArticles.filter(a => a.category === 'esports').length },
    { id: 'awards', name: 'Awards', count: newsArticles.filter(a => a.category === 'awards').length },
    { id: 'development', name: 'Development', count: newsArticles.filter(a => a.category === 'development').length }
  ]

  const filteredArticles = selectedCategory === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory)

  const getCategoryColor = (category) => {
    const colors = {
      'updates': 'bg-cyber-blue',
      'community': 'bg-cyber-pink',
      'esports': 'bg-cyber-yellow',
      'awards': 'bg-green-500',
      'development': 'bg-purple-500'
    }
    return colors[category] || 'bg-gray-500'
  }

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen py-20"
      data-scroll-section
      id="news"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-6xl font-cyber font-bold mb-6 bg-gradient-to-r from-cyber-blue to-cyber-yellow bg-clip-text text-transparent"
            data-scroll
            data-scroll-speed="2"
          >
            Latest News
          </h2>
          
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            data-scroll
            data-scroll-speed="1"
          >
            Stay up to date with the latest SuperPluk developments, community highlights, 
            and behind-the-scenes insights from our development team.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyber-blue to-cyber-pink text-black'
                  : 'border border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black'
              }`}
            >
              <span>{category.name}</span>
              <span className="bg-black/20 px-2 py-1 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Featured articles */}
        <div className="mb-12">
          <h3 className="text-2xl font-cyber font-bold text-cyber-yellow mb-6">Featured Stories</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredArticles.filter(article => article.featured).map((article, index) => (
              <div 
                key={article.id}
                className="news-card group cursor-pointer"
                data-scroll
                data-scroll-speed={1 + index * 0.2}
              >
                <div className="bg-gradient-to-br from-gray-800 to-black p-6 rounded-2xl border border-cyber-blue/30 hover:border-cyber-pink/50 transition-all duration-500 h-full group-hover:scale-105">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{article.image}</div>
                    <div className="flex flex-col items-end">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold text-black ${getCategoryColor(article.category)}`}>
                        {article.category.toUpperCase()}
                      </span>
                      <span className="text-gray-400 text-sm mt-2">{article.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-blue transition-colors duration-300">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-cyber-pink text-sm">{article.date}</span>
                    <button className="text-cyber-blue hover:text-white transition-colors duration-300 font-semibold">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regular articles */}
        <div>
          <h3 className="text-2xl font-cyber font-bold text-cyber-blue mb-6">Recent Updates</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.filter(article => !article.featured).map((article, index) => (
              <div 
                key={article.id}
                className="news-card group cursor-pointer"
                data-scroll
                data-scroll-speed={0.5 + index * 0.1}
              >
                <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-gray-700 hover:border-cyber-blue transition-all duration-500 h-full group-hover:scale-105">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{article.image}</div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-black ${getCategoryColor(article.category)}`}>
                      {article.category.toUpperCase()}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-cyber-blue transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h4>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500">{article.date}</span>
                    <span className="text-gray-500">{article.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyber-blue/10 to-cyber-pink/10 p-8 rounded-2xl border border-cyber-blue/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-cyber font-bold text-white mb-4">
              Never Miss an Update
            </h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter and be the first to know about new features, 
              updates, events, and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 bg-black/50 border border-cyber-blue/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyber-blue transition-colors duration-300"
              />
              <button className="bg-gradient-to-r from-cyber-blue to-cyber-pink px-6 py-3 rounded-lg font-semibold text-black hover:scale-105 transition-transform duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsSection