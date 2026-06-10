import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Accueil from './pages/Accueil'
import Carte from './pages/Carte'
import Hopitaux from './pages/Hopitaux'
import Glossaire from './pages/Glossaire'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/carte" element={<Carte />} />
        <Route path="/hopitaux" element={<Hopitaux />} />
        <Route path="/glossaire" element={<Glossaire />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App