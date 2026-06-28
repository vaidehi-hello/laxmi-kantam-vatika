import { createContext, useContext } from 'react'

const VenueContext = createContext(null)

export const venueInfo = {
  name:        'Laxmi Kantam Vatika',
  tagline:     'A perfect venue for weddings, receptions, birthdays & all special occasions.',
  phone:       import.meta.env.VITE_PHONE_NUMBER   || '+91 62877 96001',
  whatsapp:    import.meta.env.VITE_WHATSAPP_NUMBER || '+91 62877 96001',
  email:       import.meta.env.VITE_EMAIL || 'laksmikantamvatika520@gmail.com',   // ← new line
  address:     'Bodhi Chowk, Shahpur Village Road, near Shri Ram School, Bashudev Nagar, Jaganpura, Patna, Bihar 800030',
  hours:       'Mon – Sun: 09:00 AM – 10:00 PM',
  capacity:    '1000+',
  parking:     'Yes, ample free parking',
  rating:      '4.8',
  totalReviews:'500+',
  instagram:   'https://www.instagram.com/lkssmiikaantmvaattikaa?igsh=MWtmY3FoMmtkdW51Yw==',
  facebook:    'https://www.facebook.com/share/1L7ihemTeX/',
  
  mapsEmbedUrl: import.meta.env.VITE_MAPS_EMBED_URL || 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.1982346965683!2d85.15417257424488!3d25.565070777475942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a722ac1212e5%3A0xb6b6194d3c336497!2z4KSy4KSV4KWN4KS34KWN4KSu4KWAIOCkleCkvuCkqOCljeCkpOCkriDgpLXgpL7gpJ_gpL_gpJXgpL4!5e0!3m2!1sen!2sin!4v1782587372642!5m2!1sen!2sin',
  googleBizUrl: 'https://share.google/cUR1fA6YtntLRr5jq',
}

export function VenueProvider({ children }) {
  return <VenueContext.Provider value={venueInfo}>{children}</VenueContext.Provider>
}

export function useVenue() {
  return useContext(VenueContext)
}
