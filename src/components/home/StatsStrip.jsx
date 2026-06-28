import { useVenue } from '../../context/VenueContext'

export default function StatsStrip() {
  const venue = useVenue()

  const stats = [
    { value: '100+',          label: 'Events Hosted' },
    { value: venue.capacity,  label: 'Guest Capacity' },
    { value: venue.rating + '★', label: 'Google Rating' },
    { value: "10+",           label: 'Years of Service' },
  ]

  return (
    <div className="bg-maroon-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-serif text-2xl sm:text-3xl font-semibold text-gold-300">{s.value}</p>
            <p className="text-beige-200 text-xs sm:text-sm mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
