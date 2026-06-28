import SectionHeading from '../components/ui/SectionHeading'
import AnimatedSection from '../components/ui/AnimatedSection'
import GalleryGrid     from '../components/gallery/GalleryGrid'

export default function Gallery() {
  return (
    <div className="pt-20">
      <section className="section-pad bg-[#fff7e6]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeading eyebrow="Visual Experience" title="Gallery of Dreams" />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <GalleryGrid />
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
