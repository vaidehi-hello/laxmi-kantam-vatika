import { Link } from 'react-router-dom'
import { FaEye, FaDownload } from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading'
import AnimatedSection from '../ui/AnimatedSection'

// Same 4-photo collage used on the full Menu page — replace with real venue food images
const menuPhotos = [
  { src: '/images/menu/food1.avif', alt: 'Indian wedding jewelry' },
  { src: '/images/menu/food2.avif', alt: 'Indian sweets' },
  { src: '/images/menu/food3.avif', alt: 'Catering spread' },
  { src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400', alt: 'Indian cuisine' },
]

// Set this once you have a real PDF in /public, e.g. '/menu.pdf'
const MENU_PDF_URL = '/laxmi-kantam-vatika-menu.pdf'

export default function MenuPreviewSection() {
  return (
    <section className="section-pad bg-[#fff7e6]">
      <div className="max-w-5xl mx-auto text-center">
        <AnimatedSection>
          <SectionHeading eyebrow="Culinary Experience" title="Our Menu" />
        </AnimatedSection>

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
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/menu" className="btn-primary inline-flex items-center gap-2">
              <FaEye /> View Menu
            </Link>
            {MENU_PDF_URL ? (
             <a 
                href={MENU_PDF_URL}
                download="laxmi-kantam-vatika-menu.pdf"
                className="btn-outline inline-flex items-center gap-2"
              >
                <FaDownload /> Download Menu
              </a>
            ) : (
              <button
                type="button"
                disabled
                title="Menu PDF coming soon"
                className="btn-outline inline-flex items-center gap-2 opacity-50 cursor-not-allowed"
              >
                <FaDownload /> Download Menu
              </button>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}