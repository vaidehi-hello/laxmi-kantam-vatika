import HeroSection    from '../components/home/HeroSection'
import StatsStrip     from '../components/home/StatsStrip'
import WhyChooseUs    from '../components/home/WhyChooseUs'
import ReviewsSection from '../components/reviews/ReviewsSection'
import AnimatedSection from '../components/ui/AnimatedSection'
import SectionHeading  from '../components/ui/SectionHeading'
import GalleryPreviewSection from '../components/home/GalleryPreviewSection'
import MenuPreviewSection    from '../components/home/MenuPreviewSection'
import { occasions }   from '../data/occasions'
import { packages }    from '../data/packages'
import { currentOffer } from '../data/offer'
import { useVenue }    from '../context/VenueContext'
import { Link }        from 'react-router-dom'
import { FaWhatsapp }  from 'react-icons/fa'
import PackageCard     from '../components/packages/PackageCard'
import {
  GiFlowerPot, GiLovers, GiDiamondRing,
} from 'react-icons/gi'
import {
  MdCorporateFare, MdEvent, MdCelebration,
} from 'react-icons/md'
import { FaBirthdayCake, FaRing } from 'react-icons/fa'
import { BsStars } from 'react-icons/bs'

const iconMap = {
  Wedding:       FaRing,
  Reception:     GiLovers,
  Birthday:      FaBirthdayCake,
  Engagement:    GiDiamondRing,
  'Haldi/Mehendi': GiFlowerPot,
  Anniversary:   BsStars,
  Corporate:     MdCorporateFare,
  Events:        MdEvent,
}

export default function Home() {
  const venue = useVenue()

  return (
    <>
      <HeroSection />
      <StatsStrip />
      <WhyChooseUs />

      {/* Occasions teaser */}
      <section className="section-pad bg-[#fff7e6]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeading eyebrow="We Host" title="Perfect for Every Occasion" />
          </AnimatedSection>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-4 mt-4">
            {occasions.map((o, i) => {
              const Icon = iconMap[o.label] || MdEvent
              return (
                <AnimatedSection key={o.id} delay={i * 0.05}>
                  <div className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-beige-50 transition-colors cursor-default">
                    <div className="w-12 h-12 rounded-full bg-beige-100 flex items-center justify-center">
                      <Icon className="text-maroon-700 text-xl" />
                    </div>
                    <span className="text-xs text-center text-gray-600 font-medium">{o.label}</span>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
          <div className="text-center mt-8">
            
          </div>
        </div>
      </section>

 <GalleryPreviewSection />

      {/* Packages teaser */}
      <section className="section-pad bg-[#fff7e6]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeading title="Event Packages" />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
            {packages.map((pkg, i) => (
              <AnimatedSection key={pkg.id} delay={i * 0.07}>
                <PackageCard pkg={pkg} />
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/packages" className="btn-primary">See All Packages</Link>
          </div>
        </div>
      </section>
      
      <MenuPreviewSection />
      <ReviewsSection />

      {/* Current offer banner */}
      
    </>
  )
}
