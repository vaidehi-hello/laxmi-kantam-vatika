import { useState, useEffect } from 'react'
import { FaWhatsapp, FaPhone } from 'react-icons/fa'
import { HiArrowUp } from 'react-icons/hi'
import { useVenue } from '../../context/VenueContext'

export default function FloatingButtons() {
  const venue            = useVenue()
  const [show, setShow]  = useState(false)

  useEffect(() => {
    const handler = () => setShow(window.scrollY > 300)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="fixed bottom-6 right-4 flex flex-col gap-3 z-50">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${venue.whatsapp}?text=Hi%2C%20I%20want%20to%20enquire%20about%20the%20venue`}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
      >
        <FaWhatsapp className="text-white text-xl" />
      </a>

      {/* Call */}
      <a
        href={`tel:${venue.phone}`}
        title="Call us"
        className="w-12 h-12 rounded-full bg-gold-500 hover:bg-gold-600 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
      >
        <FaPhone className="text-white text-base" />
      </a>

      {/* Back to top */}
      {show && (
        <button
          onClick={scrollTop}
          title="Back to top"
          className="w-12 h-12 rounded-full bg-maroon-700 hover:bg-maroon-900 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        >
          <HiArrowUp className="text-white text-lg" />
        </button>
      )}
    </div>
  )
}