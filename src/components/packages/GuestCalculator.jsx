import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { useVenue }   from '../../context/VenueContext'

function recommend(guests) {
  if (guests <= 100) return { name: 'Veg Package 1', price: 800 }
  if (guests <= 300) return { name: 'Veg Package 2', price: 900 }
  if (guests <= 600) return { name: 'Non-Veg Package 1', price: 950 }
  return { name: 'Non-Veg Package 2 or Custom', price: 1050 }
}

export default function GuestCalculator() {
  const venue           = useVenue()
  const [guests, setGuests] = useState(200)
  const rec             = recommend(guests)
  const total           = guests * rec.price

  const msg = encodeURIComponent(
    `Hi, I am planning an event for ${guests} guests. Please recommend suitable packages.`
  )

  return (
    <div className="bg-white rounded-2xl border border-beige-200 p-6 shadow-sm">
      <h3 className="font-serif text-xl font-semibold text-maroon-800 mb-1">Guest Count Calculator</h3>
      <p className="text-sm text-gray-500 mb-5">Slide to estimate cost for your guest count.</p>

      <label className="text-sm font-medium text-gray-700 mb-1 block">
        Number of Guests: <span className="text-maroon-700 font-semibold">{guests}</span>
      </label>
      <input
        type="range"
        min={50}
        max={1000}
        step={10}
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        className="w-full accent-maroon-700 mb-5"
      />

      <div className="bg-beige-50 rounded-xl p-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Recommended Package</span>
          <span className="font-medium text-maroon-800">{rec.name}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Per Plate</span>
          <span className="font-medium text-maroon-800">₹{rec.price}</span>
        </div>
        <div className="flex justify-between border-t border-beige-200 pt-2 mt-2">
          <span className="text-gray-700 font-medium">Estimated Total</span>
          <span className="text-maroon-800 font-bold font-serif text-base">
            ₹{total.toLocaleString('en-IN')}
          </span>
        </div>
      </div>

      <a
        href={`https://wa.me/${venue.whatsapp}?text=${msg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp w-full mt-4 justify-center"
      >
        <FaWhatsapp /> Enquire on WhatsApp
      </a>
    </div>
  )
}
