import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import { useVenue } from '../../context/VenueContext'

const links = [
  { to: '/',         label: 'Home' },
 
  { to: '/gallery',  label: 'Gallery' },
  { to: '/packages', label: 'Packages' },
 
  { to: '/menu',     label: 'Menu' },
 
  { to: '/contact',  label: 'Contact' },
]

export default function Navbar() {
  const venue      = useVenue()
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navClass = scrolled
    ? 'bg-[#fff7e6] backdrop-blur shadow-md'
    : 'bg-white/10 backdrop-blur-md border border-white/20 shadow-lg'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="font-serif text-xl font-semibold text-maroon-800 shrink-0">
          Laxmi Kantam Vatika
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `text-sm font-sans font-medium transition-colors ${
                  isActive ? 'text-maroon-700 border-b  border-maroon-700' : 'text-gray-700 hover:text-maroon-700'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={`https://wa.me/${venue.whatsapp}?text=Hi%2C%20I%20want%20to%20book%20the%20venue`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2 px-4"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-maroon-800 text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#fff7e6] border-t border-beige-200 px-4 pb-4 pt-2 shadow-md">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-2.5 text-sm font-medium border-b border-beige-100 ${
                  isActive ? 'text-maroon-700' : 'text-gray-700'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={`https://wa.me/${venue.whatsapp}?text=Hi%2C%20I%20want%20to%20book%20the%20venue`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-3 w-full justify-center"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  )
}
