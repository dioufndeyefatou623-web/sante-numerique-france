import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  const linkClass = (path) =>
    location.pathname === path
      ? "text-white font-bold border-b-2 border-white pb-1"
      : "text-blue-200 hover:text-white"

  return (
    <nav className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">🏥 Santé Numérique France</h1>
      <ul className="flex gap-6">
        <li><Link to="/" className={linkClass("/")}>Accueil</Link></li>
        <li><Link to="/carte" className={linkClass("/carte")}>Carte</Link></li>
        <li><Link to="/hopitaux" className={linkClass("/hopitaux")}>Hôpitaux</Link></li>
        <li><Link to="/glossaire" className={linkClass("/glossaire")}>Glossaire</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar