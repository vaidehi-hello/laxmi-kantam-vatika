import { FaMapMarkerAlt, FaPhone, FaClock, FaWhatsapp } from 'react-icons/fa'
import { useVenue } from '../../context/VenueContext'

export function ContactInfo() {
  const venue = useVenue()
  const waMsg = encodeURIComponent('Hi, I want to connect regarding an event booking.')

  return (
    <div className="space-y-6">
      <div className="flex gap-3">
        <FaMapMarkerAlt className="text-maroon-600 text-lg mt-0.5 shrink-0" />
        <div>
          <p className="text-xs uppercase text-gray-400 tracking-wider mb-0.5">Address</p>
          <p className="text-sm text-maroon-700 font-medium">{venue.address}</p>
        </div>
      </div>

      <div className="flex gap-3">
        <FaPhone className="text-maroon-600 text-lg mt-0.5 shrink-0" />
        <div>
          <p className="text-xs uppercase text-gray-400 tracking-wider mb-0.5">Phone</p>
          <a href={`tel:${venue.phone}`} className="text-sm text-maroon-700 font-medium hover:underline">
            {venue.phone}
          </a>
        </div>
      </div>

      <div className="flex gap-3">
        <FaClock className="text-maroon-600 text-lg mt-0.5 shrink-0" />
        <div>
          <p className="text-xs uppercase text-gray-400 tracking-wider mb-0.5">Business Hours</p>
          <p className="text-sm text-maroon-700 font-medium">{venue.hours}</p>
        </div>
      </div>

      <a
        href={`https://wa.me/${venue.whatsapp}?text=${waMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp"
      >
        <FaWhatsapp /> Connect via WhatsApp
      </a>
    </div>
  )
}

export function MapEmbed() {
  const venue = useVenue()

  return (
    <div className="rounded-2xl overflow-hidden border border-beige-200 shadow-sm h-72 lg:h-full min-h-[280px]">
      {venue.mapsEmbedUrl ? (
        <iframe
          src={venue.mapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: '280px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Laxmi Kantam Vatika location"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-beige-100 text-gray-400 text-sm">
          Add VITE_MAPS_EMBED_URL to .env to show the map
        </div>
      )}
    </div>
  )
}
