import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const données = [
  { région: "Île-de-France", hopitaux: 210 },
  { région: "Auvergne-Rhône", hopitaux: 150 },
  { région: "PACA", hopitaux: 130 },
  { région: "Occitanie", hopitaux: 120 },
  { région: "Bretagne", hopitaux: 90 },
  { région: "Normandie", hopitaux: 85 },
]

function Hopitaux() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto">

        {/* Titre */}
        <h1 className="text-3xl font-bold text-blue-900 mb-2">🏥 Données hospitalières</h1>
        <p className="text-gray-600 mb-8">Nombre d'hôpitaux par région en France.</p>

        {/* Graphique */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold text-blue-900 mb-6">Hôpitaux par région</h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={données}>
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