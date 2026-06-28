import { useState, useEffect } from 'react'
import { FaPhone, FaWhatsapp, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { MdDirections } from 'react-icons/md'
import { useVenue } from '../../context/VenueContext'

// Replace these with your actual hero image paths
const HERO_IMAGES = [
  '/images/gallery/out8.png',
  '/images/gallery/out4.jpeg',
  '/images/gallery/out6.jpeg',
  '/images/gallery/hall3.jpg',
  '/images/gallery/stage3.jpg',
  '/images/gallery/out1.jpg',
  '/images/gallery/stage1.jpg',
  '/images/gallery/room4.jpeg',
  '/images/gallery/out2.jpg',
  
]

const AUTO_PLAY_INTERVAL = 5000 // ms between auto-advance

export default function HeroSection() {
  const venue = useVenue()
  const [current, setCurrent] = useState(0)

  const goPrev = () => setCurrent((i) => (i === 0 ? HERO_IMAGES.length - 1 : i - 1))
  const goNext = () => setCurrent((i) => (i === HERO_IMAGES.length - 1 ? 0 : i + 1))

  // Auto-advance, paused/reset whenever the user manually navigates
  useEffect(() => {
    const timer = setInterval(goNext, AUTO_PLAY_INTERVAL)
    return () => clearInterval(timer)
  }, [current])

  return (
    <section className="relative min-h-screen flex items-end pb-24 pt-16 overflow-hidden">
      {/* Background image layers, cross-fading */}
      {HERO_IMAGES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />

      {/* Prev / Next arrows */}
      <button
        onClick={goPrev}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur border border-white/30 text-white flex items-center justify-center hover:bg-white/30 transition-colors"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={goNext}
        aria-label="Next slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur border border-white/30 text-white flex items-center justify-center hover:bg-white/30 transition-colors"
      >
        <FaChevronRight />
      </button>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="max-w-xl">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-4">
            Celebrate Every<br />Special Moment
          </h1>
          <p className="text-beige-100 text-base sm:text-lg mb-8 leading-relaxed">
            The Premium Venue for Your Dream Events. Where elegance meets heritage in the heart of the city.
          </p>

          <div className="flex flex-wrap gap-3">
            {/* Call */}
            <a
              href={`tel:${venue.phone}`}
              className="flex items-center gap-2 bg-[#fff7e6] text-gray-800 font-medium text-sm px-5 py-3 rounded-md hover:bg-beige-100 transition-colors shadow"
            >
              <FaPhone className="text-maroon-700" />
              Call
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${venue.whatsapp}?text=Hi%2C%20I%20want%20to%20enquire%20about%20the%20venue`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white font-medium text-sm px-5 py-3 rounded-md hover:bg-green-600 transition-colors shadow"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            {/* Directions */}
            <a
              href="https://maps.google.com/?q=Laxmi+Kantam+Vatika+Patna"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/20 backdrop-blur text-white border border-white/30 font-medium text-sm px-5 py-3 rounded-md hover:bg-white/30 transition-colors"
            >
              <MdDirections />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}