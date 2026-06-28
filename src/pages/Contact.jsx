import SectionHeading        from '../components/ui/SectionHeading'
import AnimatedSection        from '../components/ui/AnimatedSection'
import { ContactInfo, MapEmbed } from '../components/contact/ContactInfo'

export default function Contact() {
  return (
    <div className="pt-20">
      <section className="section-pad bg-[#fff7e6]">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-maroon-800 mb-10">
              Find Us
            </h1>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <AnimatedSection>
              <ContactInfo />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <MapEmbed />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
