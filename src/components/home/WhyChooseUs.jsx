import {
  MdOutlineApartment, MdOutlinePeopleAlt, MdOutlineKingBed,
  MdOutlineAutoAwesome, MdOutlineLocalParking, MdOutlineDinnerDining,
  MdOutlineLocationOn, MdOutlineAttachMoney,
} from 'react-icons/md'
import SectionHeading   from '../ui/SectionHeading'
import AnimatedSection  from '../ui/AnimatedSection'

const features = [
  { icon: MdOutlineApartment,    title: 'Spacious Hall',         desc: 'Grand interiors designed to comfortably accommodate large gatherings with ease.' },
  { icon: MdOutlinePeopleAlt,    title: 'High Capacity',         desc: 'A spacious environment perfectly suited for 1000+ guests.' },
  { icon: MdOutlineKingBed,      title: 'Guest Accommodation',   desc: 'Comfortable stay options available for your out-of-town guests.' },
  { icon: MdOutlineAutoAwesome,  title: 'Elegant Decoration',    desc: 'Bespoke decor themes that transform the venue into a fairytale setting.' },
  { icon: MdOutlineLocalParking, title: 'Ample Parking',         desc: 'Secure and dedicated parking space for all your guests\' vehicles.' },
  { icon: MdOutlineDinnerDining, title: 'Professional Catering', desc: 'Exquisite culinary experiences with a wide range of authentic cuisines.' },
  { icon: MdOutlineLocationOn,   title: 'Prime Location',        desc: 'Easily accessible centrally located venue for the convenience of your guests.' },
  { icon: MdOutlineAttachMoney,  title: 'Affordable Packages',   desc: 'Premium luxury made accessible with flexible pricing tailored to your needs.' },
]

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-[#fff7e6]">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading title="Why Choose Our Venue?" />
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.05}>
              <div className="flex flex-col gap-3 p-2">
                <div className="w-10 h-10 rounded-full bg-beige-200 flex items-center justify-center">
                  <f.icon className="text-maroon-700 text-lg" />
                </div>
                <h3 className="font-serif text-base font-semibold text-maroon-800">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
