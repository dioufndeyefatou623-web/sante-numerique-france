import { Link } from 'react-router-dom'

function Accueil() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <div className="bg-blue-900 text-white text-center py-20 px-6">
        <h1 className="text-4xl font-bold mb-4">
          🏥 Santé Numérique France
        </h1>
        <p className="text-xl text-blue-200 max-w-2xl mx-auto">
          Explorez les données de santé publique françaises de façon simple et visuelle
        </p>
      </div>

      {/* Chiffres clés */}
      <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto mt-12 px-6">
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <p className="text-4xl font-bold text-blue-900">3 000</p>
          <p className="text-gray-600 mt-2">Hôpitaux en France</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <p className="text-4xl font-bold text-blue-900">67M</p>
          <p className="text-gray-600 mt-2">Habitants</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <p className="text-4xl font-bold text-blue-900">8%</p>
          <p className="text-gray-600 mt-2">Déserts médicaux</p>
        </div>
      </div>

      {/* Section description */}
      <div className="max-w-4xl mx-auto mt-16 px-6 text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Pourquoi ce site ?
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Les données de santé publique existent mais sont souvent complexes et inaccessibles. 
          Ce site les rend compréhensibles par tous en quelques secondes.
        </p>
      </div>

      {/* Boutons navigation */}
      <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto mt-12 mb-16 px-6">
        <Link to="/carte" className="bg-blue-900 text-white rounded-xl p-6 text-center hover:bg-blue-700">
          <p className="text-3xl mb-2">🗺️</p>
          <p className="font-bold text-lg">Carte</p>
          <p className="text-blue-200 text-sm mt-1">Déserts médicaux par région</p>
        </Link>
        <Link to="/hopitaux" className="bg-blue-900 text-white rounded-xl p-6 text-center hover:bg-blue-700">
          <p className="text-3xl mb-2">🏥</p>
          <p className="font-bold text-lg">Hôpitaux</p>
          <p className="text-blue-200 text-sm mt-1">Données hospitalières</p>
        </Link>
        <Link to="/glossaire" className="bg-blue-900 text-white rounded-xl p-6 text-center hover:bg-blue-700">
          <p className="text-3xl mb-2">📖</p>
          <p className="font-bold text-lg">Glossaire</p>
          <p className="text-blue-200 text-sm mt-1">Définitions et termes clés</p>
        </Link>
      </div>

    </div>
  )
}

export default Accueil