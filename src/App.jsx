import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import { VenueProvider } from './context/VenueContext'
import Home      from './pages/Home'

import Gallery   from './pages/Gallery'

import Packages  from './pages/Packages'
import Menu      from './pages/Menu'

import Contact   from './pages/Contact'

export default function App() {
  return (
    <VenueProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index         element={<Home />} />
            
            <Route path="gallery"   element={<Gallery />} />
            
            <Route path="packages"  element={<Packages />} />
            <Route path="menu"      element={<Menu />} />
            
            <Route path="contact"   element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </VenueProvider>
  )
}
