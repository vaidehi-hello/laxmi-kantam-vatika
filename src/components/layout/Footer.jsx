import { Link } from 'react-router-dom'
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaInstagram, FaFacebookF,FaEnvelope } from 'react-icons/fa'
import { useVenue } from '../../context/VenueContext'

const links = [
  { to: '/',         label: 'Home' },
 
  { to: '/gallery',  label: 'Gallery' },
  { to: '/packages', label: 'Packages' },
  { to: '/contact',  label: 'Contact' },
]

export default function Footer() {
  const venue = useVenue()
  const year  = new Date().getFullYear()

  return (
    <footer className="bg-maroon-900 text-beige-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-serif text-2xl text-white mb-2">{venue.name}</h3>
          <p className="text-beige-300 text-sm leading-relaxed">{venue.tagline}</p>
          <div className="flex gap-3 mt-4">
            <a href={venue.instagram} target="_blank" rel="noopener noreferrer"
               className="w-9 h-9 rounded-full bg-maroon-700 flex items-center justify-center hover:bg-gold transition-colors">
              <FaInstagram className="text-white text-sm" />
            </a>
            <a href={venue.facebook} target="_blank" rel="noopener noreferrer"
               className="w-9 h-9 rounded-full bg-maroon-700 flex items-center justify-center hover:bg-gold transition-colors">
              <FaFacebookF className="text-white text-sm" />
            </a>
            <a href={`mailto:${venue.email}`}
     className="w-9 h-9 rounded-full bg-maroon-700 flex items-center justify-center hover:bg-gold transition-colors">
    <FaEnvelope className="text-white text-sm" />
  </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-sans font-semibold text-white mb-4 uppercase text-xs tracking-widest">Quick Links</h4>
          <ul className="space-y-2">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-beige-300 text-sm hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-sans font-semibold text-white mb-4 uppercase text-xs tracking-widest">Contact</h4>
          <ul className="space-y-3 text-sm text-beige-300">
            <li className="flex gap-2">
              <FaMapMarkerAlt className="text-gold mt-0.5 shrink-0" />
              <span>{venue.address}</span>
            </li>
            <li>
              <a href={`tel:${venue.phone}`} className="flex gap-2 hover:text-gold transition-colors">
                <FaPhone className="text-gold mt-0.5 shrink-0" />
                {venue.phone}
              </a>
            </li>
            
    
            <li>
              <a
                href={`https://wa.me/${venue.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 hover:text-gold transition-colors"
              >
                <FaWhatsapp className="text-gold mt-0.5 shrink-0" />
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-maroon-700 text-center text-xs text-beige-400 py-4">
        © {year} {venue.name}. All rights reserved.
      </div>
    </footer>
  )
}
