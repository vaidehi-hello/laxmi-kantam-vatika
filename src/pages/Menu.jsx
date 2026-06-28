import SectionHeading from '../components/ui/SectionHeading'
import AnimatedSection from '../components/ui/AnimatedSection'
import MenuSection     from '../components/menu/MenuSection'

// 4 food photos for the collage — replace with real venue food images
const menuPhotos = [
  { src: '/images/menu/food1.avif', alt: 'Indian wedding jewelry' },
  { src: '/images/menu/food2.avif', alt: 'Indian sweets' },
  { src: '/images/menu/food3.avif', alt: 'Catering spread' },
  { src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400', alt: 'Indian cuisine' },
]

export default function Menu() {
  return (
    <div className="pt-20">
      <section className="section-pad bg-[#fff7e6]">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <SectionHeading eyebrow="Culinary Experience" title="Our Menu" />
          </AnimatedSection>

          {/* Photo collage */}
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-2 gap-2 rounded-2xl overflow-hidden mb-10 max-w-lg mx-auto">
              {menuPhotos.map((p, i) => (
                <img
                  key={i}
                  src={p.src}
                  alt={p.alt}
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <MenuSection />
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
