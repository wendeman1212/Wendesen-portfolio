import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="sticky top-0 bg-gray-900/98 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.3)] z-50 py-4 border-b border-gray-800">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Wendesen Kebede
          </div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 list-none items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="no-underline font-semibold text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <ul className="md:hidden flex flex-col gap-4 mt-4 pb-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="block no-underline font-semibold text-gray-300 hover:text-blue-400 transition-colors duration-200 py-2"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Navbar
