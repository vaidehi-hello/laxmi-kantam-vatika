import SectionHeading from '../components/ui/SectionHeading'
import AnimatedSection from '../components/ui/AnimatedSection'
import PackageCard     from '../components/packages/PackageCard'
import GuestCalculator from '../components/packages/GuestCalculator'
import { packages, extraAmenities } from '../data/packages'
import { useVenue }    from '../context/VenueContext'
import { FaWhatsapp }  from 'react-icons/fa'
import {
  FaParking, FaBolt, FaSnowflake, FaPalette,
  FaMusic, FaCamera, FaUtensils, FaShieldAlt, FaCheckCircle,
} from 'react-icons/fa'

const amenityIcons = {
  Parking: FaParking,
  'Power Backup': FaBolt,
  AC: FaSnowflake,
  Decoration: FaPalette,
  DJ: FaMusic,
  Photography: FaCamera,
  Catering: FaUtensils,
  Security: FaShieldAlt,
}

export default function Packages() {
  const venue = useVenue()
  const waMsg = encodeURIComponent('Hi, I want to know more about custom packages for my event.')

  return (
    <div className="pt-20">
      <section className="section-pad bg-[#fff7e6] border-gold-300">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeading title="Event Packages" />
          </AnimatedSection>

          {/* Package cards + Custom card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-8 items-start">
            {packages.map((pkg, i) => (
              <AnimatedSection key={pkg.id} delay={i * 0.07} className="lg:col-span-1">
                <PackageCard pkg={pkg} />
              </AnimatedSection>
            ))}

            {/* Custom package card */}
            {/* Custom package card */}
<AnimatedSection delay={0.28} className="lg:col-span-1">
  <div className="rounded-2xl border border-gold-300 bg-beige-50 p-6 text-center h-full flex flex-col">
    <h3 className="font-serif text-xl font-semibold text-maroon-800 mb-1">Custom</h3>
    <p className="text-sm text-gray-500 mb-5">Tailored specifically for you</p>

    <a
      href={`https://wa.me/${venue.whatsapp}?text=${waMsg}`}
      target="_blank"
      rel="noopener noreferrer"
      className="font-serif text-maroon-800 text-lg font-bold hover:text-gold-700 transition-colors mb-6"
    >
      Contact Us
    </a>

    <div className="mt-auto">
      <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-4">
        Extra Amenities Available
      </p>
      <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-6">
        {extraAmenities.map((a) => {
          const Icon = amenityIcons[a.label] || FaCheckCircle
          return (
            <div key={a.label} className="flex items-center gap-2 text-xs text-gray-600">
              <Icon className="text-maroon-600 shrink-0" />
              <span>{a.label}</span>
            </div>
          )
        })}
      </div>
    </div>

    <a
      href={`https://wa.me/${venue.whatsapp}?text=${waMsg}`}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-gold text-sm py-2.5 justify-center"
    >
      Inquire Now
    </a>
  </div>
</AnimatedSection>
          </div>

          {/* Guest Calculator */}
          
        </div>
      </section>
    </div>
  )
}
