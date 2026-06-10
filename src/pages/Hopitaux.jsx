import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const toutesLesDonnées = [
  { région: "Île-de-France", hopitaux: 210 },
  { région: "Auvergne-Rhône", hopitaux: 150 },
  { région: "PACA", hopitaux: 130 },
  { région: "Occitanie", hopitaux: 120 },
  { région: "Bretagne", hopitaux: 90 },
  { région: "Normandie", hopitaux: 85 },
]

function Hopitaux() {
  const [filtre, setFiltre] = useState("Toutes")

  const donnéesFiltées = filtre === "Toutes"
    ? toutesLesDonnées
    : toutesLesDonnées.filter((item) => item.région === filtre)

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto">

        {/* Titre */}
        <h1 className="text-3xl font-bold text-blue-900 mb-2">🏥 Données hospitalières</h1>
        <p className="text-gray-600 mb-8">Nombre d'hôpitaux par région en France.</p>

        {/* Filtre */}
        <div className="mb-6">
          <label className="text-gray-700 font-medium mr-3">Filtrer par région :</label>
          <select
            value={filtre}
            onChange={(e) => setFiltre(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
          >
            <option value="Toutes">Toutes les régions</option>
            {toutesLesDonnées.map((item) => (
              <option key={item.région} value={item.région}>{item.région}</option>
            ))}
          </select>
        </div>

        {/* Graphique */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold text-blue-900 mb-6">
            {filtre === "Toutes" ? "Toutes les régions" : filtre}
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={donnéesFiltées}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="région" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="hopitaux" fill="#1e3a8a" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  )
}

export default Hopitaux