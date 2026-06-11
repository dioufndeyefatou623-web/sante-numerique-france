import { useState } from 'react'

const termes = [
  { terme: "SIH", definition: "Système d'Information Hospitalier. Ensemble des outils informatiques qui gèrent les informations d'un hôpital." },
  { terme: "DPI", definition: "Dossier Patient Informatisé. Version numérique du dossier médical d'un patient." },
  { terme: "Télémédecine", definition: "Pratique médicale à distance grâce aux technologies numériques (téléconsultation, téléexpertise...)." },
  { terme: "Désert médical", definition: "Zone géographique où l'accès aux soins est insuffisant par manque de professionnels de santé." },
  { terme: "FHIR", definition: "Fast Healthcare Interoperability Resources. Standard international pour l'échange de données de santé." },
  { terme: "Interopérabilité", definition: "Capacité de différents systèmes informatiques à échanger et utiliser des informations entre eux." },
  { terme: "DMP", definition: "Dossier Médical Partagé. Carnet de santé numérique accessible par tous les professionnels de santé." },
  { terme: "RGPD", definition: "Règlement Général sur la Protection des Données. Loi européenne qui protège les données personnelles des citoyens." },
  { terme: "HL7", definition: "Health Level 7. Standard international pour l'échange de données entre systèmes d'information de santé." },
  { terme: "DICOM", definition: "Digital Imaging and Communications in Medicine. Standard pour les images médicales (radios, IRM...)." },
]

function Glossaire() {
  const [recherche, setRecherche] = useState("")

  const termesFiltres = termes.filter(item =>
    item.terme.toLowerCase().includes(recherche.toLowerCase()) ||
    item.definition.toLowerCase().includes(recherche.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold text-blue-900 mb-2">📖 Glossaire</h1>
        <p className="text-gray-600 mb-8">Les termes clés de la santé numérique expliqués simplement.</p>

        {/* Barre de recherche */}
        <input
          type="text"
          placeholder="🔍 Rechercher un terme..."
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-8 text-gray-700 focus:outline-none focus:border-blue-900"
        />

        {/* Résultats */}
        <p className="text-gray-500 text-sm mb-4">{termesFiltres.length} terme(s) trouvé(s)</p>

        {/* Liste */}
        <div className="grid grid-cols-1 gap-4">
          {termesFiltres.length > 0 ? (
            termesFiltres.map((item) => (
              <div key={item.terme} className="bg-white rounded-xl shadow p-6">
                <h2 className="text-xl font-bold text-blue-900 mb-2">{item.terme}</h2>
                <p className="text-gray-600">{item.definition}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center py-8">Aucun terme trouvé 😕</p>
          )}
        </div>

      </div>
    </div>
  )
}

export default Glossaire