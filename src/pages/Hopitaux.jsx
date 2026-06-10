import { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

function Hopitaux() {
  const [données, setDonnées] = useState([])
  const [toutesLesDonnées, setToutesLesDonnées] = useState([])
  const [chargement, setChargement] = useState(true)
  const [filtre, setFiltre] = useState("Tous")
  const [types, setTypes] = useState([])

  useEffect(() => {
    fetch("https://data.iledefrance.fr/api/explore/v2.1/catalog/datasets/finess/records?limit=100")
      .then(res => res.json())
      .then(data => {
        const comptage = {}
        data.results.forEach(etab => {
          const type = etab.libcategagretab || "Autre"
          comptage[type] = (comptage[type] || 0) + 1
        })

        const tableau = Object.entries(comptage)
          .map(([type, count]) => ({ type, count }))
          .sort((a, b) => b.count - a.count)

        setToutesLesDonnées(tableau)
        setDonnées(tableau)
        setTypes(tableau.map(item => item.type))
        setChargement(false)
      })
      .catch(() => setChargement(false))
  }, [])

  const handleFiltre = (typeChoisi) => {
    setFiltre(typeChoisi)
    if (typeChoisi === "Tous") {
      setDonnées(toutesLesDonnées)
    } else {
      setDonnées(toutesLesDonnées.filter(item => item.type === typeChoisi))
    }
  }

  if (chargement) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-blue-900 text-xl font-bold">Chargement des données...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold text-blue-900 mb-2">🏥 Données hospitalières</h1>
        <p className="text-gray-600 mb-2">Types d'établissements de santé en Île-de-France.</p>
        <p className="text-blue-900 font-medium mb-8">{toutesLesDonnées.length} types d'établissements trouvés</p>

        {/* Filtre */}
        <div className="mb-6">
          <label className="text-gray-700 font-medium mr-3">Filtrer par type :</label>
          <select
            value={filtre}
            onChange={(e) => handleFiltre(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
          >
            <option value="Tous">Tous les types</option>
            {types.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Graphique */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold text-blue-900 mb-6">
            {filtre === "Tous" ? "Tous les types" : filtre}
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={données} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="type" width={200} tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="count" fill="#1e3a8a" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  )
}

export default Hopitaux