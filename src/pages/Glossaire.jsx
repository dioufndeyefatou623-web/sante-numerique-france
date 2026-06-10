function Glossaire() {
  const termes = [
    {
      terme: "SIH",
      definition: "Système d'Information Hospitalier. Ensemble des outils informatiques qui gèrent les informations d'un hôpital."
    },
    {
      terme: "DPI",
      definition: "Dossier Patient Informatisé. Version numérique du dossier médical d'un patient."
    },
    {
      terme: "Télémédecine",
      definition: "Pratique médicale à distance grâce aux technologies numériques (téléconsultation, téléexpertise...)."
    },
    {
      terme: "Désert médical",
      definition: "Zone géographique où l'accès aux soins est insuffisant par manque de professionnels de santé."
    },
    {
      terme: "FHIR",
      definition: "Fast Healthcare Interoperability Resources. Standard international pour l'échange de données de santé."
    },
    {
      terme: "Interopérabilité",
      definition: "Capacité de différents systèmes informatiques à échanger et utiliser des informations entre eux."
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto">

        {/* Titre */}
        <h1 className="text-3xl font-bold text-blue-900 mb-2">📖 Glossaire</h1>
        <p className="text-gray-600 mb-8">Les termes clés de la santé numérique expliqués simplement.</p>

        {/* Liste des termes */}
        <div className="grid grid-cols-1 gap-4">
          {termes.map((item) => (
            <div key={item.terme} className="bg-white rounded-xl shadow p-6">
              <h2 className="text-xl font-bold text-blue-900 mb-2">{item.terme}</h2>
              <p className="text-gray-600">{item.definition}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Glossaire