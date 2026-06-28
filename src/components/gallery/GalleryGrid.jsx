import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { galleryImages, galleryCategories } from '../../data/gallery'

export default function GalleryGrid() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === active)

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-sm px-4 py-2 rounded-full font-medium border transition-colors ${
              active === cat
                ? 'bg-maroon-800 text-white border-maroon-800'
                : 'bg-white text-gray-600 border-beige-300 hover:border-maroon-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        <AnimatePresence>
          {filtered.map((img) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="break-inside-avoid rounded-xl overflow-hidden"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
