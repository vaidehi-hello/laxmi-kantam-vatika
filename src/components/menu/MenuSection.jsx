import { useState }   from 'react'
import { FaLeaf, FaDrumstickBite, FaWhatsapp, FaDownload } from 'react-icons/fa'
import { menuData }   from '../../data/menuItems'
import { useVenue }   from '../../context/VenueContext'

const tabs = [
  { key: 'vegPackage1',    icon: FaLeaf },
  { key: 'vegPackage2',    icon: FaLeaf },
  { key: 'nonVegPackage1', icon: FaDrumstickBite },
  { key: 'nonVegPackage2', icon: FaDrumstickBite },
]

export default function MenuSection() {
  const venue          = useVenue()
  const [tab, setTab]  = useState('vegPackage1')
  const data           = menuData[tab]

  const waMsg = encodeURIComponent('Hi, please share the full menu details for our event.')

  return (
    <div>
      {/* Tab switcher */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {tabs.map(({ key, icon: Icon }) => {
          const active = tab === key
          const veg    = key.startsWith('veg')
          return (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-colors ${
                active
                  ? veg
                    ? 'bg-green-600 text-white border-green-600'
                    : 'bg-maroon-700 text-white border-maroon-700'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gold-400'
              }`}
            >
              <Icon /> {menuData[key].label}
            </button>
          )
        })}
      </div>

      {/* Package price */}
      <p className="text-center font-serif text-2xl text-maroon-800 font-semibold mb-6">
        ₹{data.price.toLocaleString('en-IN')} <span className="text-base text-gray-500">/{data.unit}</span>
      </p>

      {/* Menu sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {data.sections.map((section) => (
          <div key={section.title} className="bg-white rounded-xl border border-beige-200 p-5">
            <div className="flex items-center justify-between border-b border-beige-200 pb-2 mb-1">
              <h4 className="font-serif text-base font-semibold text-maroon-800">
                {section.title}
              </h4>
              <span className="text-xs font-medium text-gold-600 bg-gold-50 px-2 py-0.5 rounded-full shrink-0">
                {section.count} Item{section.count > 1 ? 's' : ''}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-gray-500 mb-6 italic">
        ✦ Specific dishes within each section are selected at the time of booking ✦
        <br />
        ✦ Customised menus available on request ✦
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="/laxmi-kantam-vatika-menu.pdf"
          download="laxmi-kantam-vatika-menu.pdf"
          className="btn-outline"
        >
          <FaDownload /> Download Menu PDF
        </a>
        <a
          href={`https://wa.me/${venue.whatsapp}?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          <FaWhatsapp /> Request Menu on WhatsApp
        </a>
      </div>
    </div>
  )
}