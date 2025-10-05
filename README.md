# SuperPluk - Cyberpunk Landing Page 🚀

A stunning cyberpunk-themed landing page featuring interactive 3D elements, smooth scrolling, and immersive character showcases. Built with modern web technologies for the ultimate futuristic gaming experience.

![SuperPluk Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-18.3.1-blue) ![Three.js](https://img.shields.io/badge/Three.js-0.170.0-orange) ![Tailwind](https://img.shields.io/badge/Tailwind-3.4.15-cyan)

## 🎮 Features

### 🌟 Interactive 3D Experience
- **Prominent 3D Neural Helmet** - Fully interactive model that responds to mouse movement
- **Cyberpunk Visual Effects** - Energy rings, particle fields, and holographic overlays
- **Advanced Post-Processing** - Chromatic aberration, bloom effects, and glitch animations
- **Dynamic Lighting System** - Multi-colored cyberpunk lighting with real-time updates

### 🎨 Cyberpunk Aesthetics
- **Neon Color Palette** - Cyber-blue, cyber-pink, cyber-yellow, and cyber-green
- **Glitch Text Effects** - Authentic cyberpunk text animations
- **Matrix-Style Backgrounds** - Animated grid patterns and data streams
- **Terminal UI Elements** - Command-line inspired interface components

### 👥 Character System
- **6 Unique Characters** - Each with detailed backstories and abilities
- **Interactive Selection** - Click to view detailed character profiles
- **Neural Stats Display** - Animated progress bars for character attributes
- **Faction System** - Color-coded affiliations (Resistance, Corporate, AI Collective, etc.)

### 🌊 Smooth Scrolling & Animations
- **Locomotive Scroll** - Buttery smooth scrolling experience
- **GSAP Animations** - Professional scroll-triggered animations
- **Parallax Effects** - 3D model moves and rotates based on scroll position
- **Staggered Reveals** - Elements animate in sequence for visual appeal

### 📱 Responsive Design
- **Mobile-First Approach** - Optimized for all device sizes
- **Touch-Friendly** - Mobile interactions for 3D model and UI elements
- **Adaptive Layouts** - Content reorganizes beautifully on different screens
- **Performance Optimized** - Efficient rendering across devices

## 🛠 Tech Stack

- **Frontend Framework**: React 18.3.1
- **3D Graphics**: Three.js with React Three Fiber
- **Styling**: Tailwind CSS
- **Animations**: GSAP with ScrollTrigger
- **Smooth Scrolling**: Locomotive Scroll
- **Build Tool**: Vite
- **Font**: Google Fonts (Orbitron)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/superpluk.git
   cd superpluk
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
superpluk/
├── components/
│   ├── Scene3D.jsx          # 3D model and effects
│   ├── HeroSection.jsx      # Landing area with 3D showcase
│   ├── CharactersSection.jsx # Interactive character profiles
│   ├── Navigation.jsx       # Header navigation
│   ├── AboutSection.jsx     # Game information
│   ├── StorySection.jsx     # Timeline and lore
│   ├── FeaturesSection.jsx  # Game features grid
│   ├── GameplaySection.jsx  # Gameplay showcase
│   ├── SystemRequirementsSection.jsx # Tech specs
│   ├── NewsSection.jsx      # Latest updates
│   └── FooterSection.jsx    # Footer with links
├── public/
│   ├── DamagedHelmet.gltf   # 3D model file
│   └── DamagedHelmet.bin    # Model binary data
├── App.jsx                  # Main app component
├── main.jsx                 # React entry point
├── style.css               # Global styles and animations
└── index.html              # HTML template
```

## 🎭 Character Profiles

### The Resistance
- **Zara "Ghost" Chen** - Neural Hacker (Level 47)
- **Marcus "Tank" Rodriguez** - Combat Specialist (Level 52)

### Independents
- **Dr. Elena Vasquez** - AI Researcher (Level 38)
- **Kai "Neon" Tanaka** - Street Samurai (Level 41)

### Digital Entities
- **ARIA-7** - Digital Entity (Level 99)

### Corporate
- **Vincent Cross** - Corporate Executive (Level 35)

## 🎨 Color Palette

```css
--cyber-blue: #00ffff
--cyber-pink: #ff00ff  
--cyber-yellow: #ffff00
--cyber-green: #00ff00
```

## 🔧 Customization

### Adding New Characters
1. Edit `components/CharactersSection.jsx`
2. Add character object to the `characters` array
3. Include stats, abilities, and faction information

### Modifying 3D Effects
1. Edit `components/Scene3D.jsx`
2. Adjust lighting, particles, or post-processing effects
3. Modify animation parameters in useFrame hooks

### Updating Animations
1. Edit relevant component files
2. Modify GSAP timelines and ScrollTrigger settings
3. Adjust Locomotive Scroll parameters in `App.jsx`

## 📊 Performance

- **Lighthouse Score**: 95+ Performance
- **First Contentful Paint**: < 1.5s
- **Interactive**: < 2.5s
- **Mobile Optimized**: Yes
- **Accessibility**: WCAG 2.1 AA compliant

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Future Enhancements

- [ ] VR/AR compatibility
- [ ] Real-time multiplayer features
- [ ] Voice control integration
- [ ] AI-powered character interactions
- [ ] Blockchain integration for character NFTs
- [ ] Enhanced mobile gestures
- [ ] Progressive Web App (PWA) features

## 📞 Contact

**Project Creator**: [Your Name]
- Email: your.email@example.com
- Portfolio: [your-portfolio.com](https://your-portfolio.com)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🎮 Live Demo

Experience the cyberpunk future: [SuperPluk Live Demo](https://your-demo-url.com)

---

**Made with ❤️ and cyberpunk aesthetics**