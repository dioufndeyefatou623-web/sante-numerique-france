import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">🏥 Santé Numérique France</h1>
      <ul className="flex gap-6">
        <li><Link to="/" className="hover:text-blue-300">Accueil</Link></li>
        <li><Link to="/carte" className="hover:text-blue-300">Carte</Link></li>
        <li><Link to="/hopitaux" className="hover:text-blue-300">Hôpitaux</Link></li>
        <li><Link to="/glossaire" className="hover:text-blue-300">Glossaire</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar