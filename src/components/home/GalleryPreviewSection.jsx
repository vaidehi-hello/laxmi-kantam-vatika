import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom'
import SectionHeading from '../ui/SectionHeading'
import AnimatedSection from '../ui/AnimatedSection'
import { galleryImages } from '../../data/gallery'

import 'swiper/css'
import 'swiper/css/navigation'

// Show a handful of preview images on Home; full set lives on /gallery
const previewImages = galleryImages.slice(0, 8)

export default function GalleryPreviewSection() {
  return (
    <section className="section-pad bg-[#fff7e6]">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading eyebrow="Visual Experience" title="Gallery of Dreams" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="relative px-1 sm:px-10">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: '.gallery-preview-next',
                prevEl: '.gallery-preview-prev',
              }}
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                640:  { slidesPerView: 2, spaceBetween: 16 },
                1024: { slidesPerView: 3, spaceBetween: 20 },
              }}
              className="!pb-2"
            >
              {previewImages.map((img) => (
                <SwiperSlide key={img.id}>
                  <div className="rounded-xl overflow-hidden h-64 sm:h-72">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Arrows */}
            <button
              className="gallery-preview-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-maroon-800 text-white flex items-center justify-center shadow-md hover:bg-maroon-700 transition-colors"
              aria-label="Previous images"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              className="gallery-preview-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-maroon-800 text-white flex items-center justify-center shadow-md hover:bg-maroon-700 transition-colors"
              aria-label="Next images"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </AnimatedSection>

        <div className="text-center mt-8">
          <Link to="/gallery" className="btn-outline">View Full Gallery</Link>
        </div>
      </div>
    </section>
  )
}