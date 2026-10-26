// The site's pages and their addresses. Every page shares the Layout (top bar, menu
// and footer); anything that matches no address shows the friendly 404 page.
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/layout/Layout.jsx'
import Bookings from './pages/Bookings.jsx'
import Gallery from './pages/Gallery.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Privacy from './pages/Privacy.jsx'
import TheMan from './pages/TheMan.jsx'
import TheMandate from './pages/TheMandate.jsx'
import TheMessage from './pages/TheMessage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="the-man" element={<TheMan />} />
          <Route path="the-message" element={<TheMessage />} />
          <Route path="the-mandate" element={<TheMandate />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
