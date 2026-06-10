import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Accueil from './pages/Accueil'
import Carte from './pages/Carte'
import Hopitaux from './pages/Hopitaux'
import Glossaire from './pages/Glossaire'

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/carte" element={<Carte />} />
            <Route path="/hopitaux" element={<Hopitaux />} />
            <Route path="/glossaire" element={<Glossaire />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App