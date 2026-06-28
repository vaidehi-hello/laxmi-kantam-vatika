import { FaPhone, FaWhatsapp, FaDirections } from 'react-icons/fa'
import { MdDirections } from 'react-icons/md'
import { useVenue } from '../../context/VenueContext'

// Replace this URL with your actual hero image path
const HERO_IMAGE = '/images/hero/out8.png'

export default function HeroSection() {
  const venue = useVenue()

  return (
    <section
      className="relative min-h-screen flex items-end pb-24 pt-16"
      style={{
        backgroundImage: `url(${HERO_IMAGE})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />

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
