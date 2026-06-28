import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa'
import { useVenue } from '../../context/VenueContext'

export default function PackageCard({ pkg }) {
  const venue   = useVenue()
  const isFeatured = pkg.featured

  const msg = encodeURIComponent(
    `Hi, I am interested in the ${pkg.name} (₹${pkg.price}/plate). Please share details.`
  )

  return (
    <div
      className={`rounded-2xl flex flex-col gap-4 p-6 border transition-shadow hover:shadow-lg ${
        isFeatured
          ? 'bg-maroon-800 text-white border-gold-300'
          : 'bg-[#fff7e6] text-gray-800 border-gold-300'
      }`}
    >
      {pkg.tag && (
        <span className="self-start text-xs font-semibold bg-gold text-white px-3 py-0.5 rounded-full">
          {pkg.tag}
        </span>
      )}

      <div>
        <h3 className={`font-serif text-xl font-semibold ${isFeatured ? 'text-white' : 'text-maroon-800'}`}>
          {pkg.name}
        </h3>
        <p className={`text-sm mt-0.5 ${isFeatured ? 'text-gold-300' : 'text-gray-500'}`}>
          {pkg.subtitle}
        </p>
      </div>

      <div className="flex items-end gap-1">
        <span className={`font-serif text-3xl font-bold ${isFeatured ? 'text-white' : 'text-maroon-800'}`}>
          ₹{pkg.price.toLocaleString('en-IN')}
        </span>
        <span className={`text-sm mb-1 ${isFeatured ? 'text-gold-300' : 'text-gray-400'}`}>
          /{pkg.unit}
        </span>
      </div>

      <ul className="space-y-2">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm">
            <FaCheckCircle className={`shrink-0 ${isFeatured ? 'text-white' : 'text-maroon-600'}`} />
            <span className={isFeatured ? 'text-beige-100' : 'text-gray-600'}>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={`https://wa.me/${venue.whatsapp}?text=${msg}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-auto flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium transition-colors ${
          isFeatured
            ? 'bg-[#fff7e6] text-maroon-800 hover:bg-beige-100'
            : 'bg-maroon-800 text-white hover:bg-maroon-900'
        }`}
      >
        <FaWhatsapp />
        Select Plan
      </a>
    </div>
  )
}