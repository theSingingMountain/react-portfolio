// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'
function App() {
  return (
    <span className='container' id='mainContent'>
      <Info />
      <About />
      <Interests />
      <Footer />
    </span>
  )
}

export default App
