import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Toast from './components/Toast'

function App() {
  const [toast, setToast] = useState({ show: false, message: '', isError: false })

  const showToast = (message, isError = false) => {
    setToast({ show: true, message, isError })
    setTimeout(() => {
      setToast({ show: false, message: '', isError: false })
    }, 4000)
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact showToast={showToast} />
      </main>
      <Footer />
      <Toast toast={toast} />
    </div>
  )
}

export default App
