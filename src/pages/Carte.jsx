import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix icône Leaflet
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
L.Icon.Default.mergeOptions({ iconUrl, shadowUrl })

const villes = [
  { nom: "Paris", position: [48.8566, 2.3522], medecins: 350 },
  { nom: "Lyon", position: [45.7640, 4.8357], medecins: 180 },
  { nom: "Marseille", position: [43.2965, 5.3698], medecins: 160 },
  { nom: "Bordeaux", position: [44.8378, -0.5792], medecins: 120 },
  { nom: "Lille", position: [50.6292, 3.0573], medecins: 110 },
]

function Carte() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto">

        {/* Titre */}
        <h1 className="text-3xl font-bold text-blue-900 mb-2">🗺️ Carte des déserts médicaux</h1>
        <p className="text-gray-600 mb-8">Densité de médecins par ville en France.</p>

        {/* Carte */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <MapContainer
            center={[46.603354, 1.888334]}
            zoom={6}
            style={{ height: "500px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {villes.map((ville) => (
              <Marker key={ville.nom} position={ville.position}>
                <Popup>
                  <b>{ville.nom}</b><br />
                  {ville.medecins} médecins pour 100 000 habitants
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

      </div>
    </div>
  )
}

export default Carte