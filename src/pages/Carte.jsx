import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'

L.Icon.Default.mergeOptions({ iconUrl, shadowUrl })

function Carte() {
  const [etablissements, setEtablissements] = useState([])
  const [chargement, setChargement] = useState(true)

  useEffect(() => {
    fetch("https://data.iledefrance.fr/api/explore/v2.1/catalog/datasets/finess/records?limit=100")
      .then(res => res.json())
      .then(data => {
        setEtablissements(data.results)
        setChargement(false)
      })
      .catch(() => setChargement(false))
  }, [])

  if (chargement) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-blue-900 text-xl font-bold">Chargement de la carte...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold text-blue-900 mb-2">🗺️ Carte des établissements</h1>
        <p className="text-gray-600 mb-2">Établissements de santé en Île-de-France.</p>
        <p className="text-blue-900 font-medium mb-8">{etablissements.length} établissements affichés</p>

        <div className="bg-white rounded-xl shadow overflow-hidden">
          <MapContainer
            center={[48.8566, 2.3522]}
            zoom={11}
            style={{ height: "500px", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {etablissements.map((etab) => (
              etab.coord && (
                <Marker
                  key={etab.nofinesset}
                  position={[etab.coord.lat, etab.coord.lon]}
                >
                  <Popup>
                    <b>{etab.rs}</b><br />
                    {etab.libcategetab}<br />
                    {etab.address}
                  </Popup>
                </Marker>
              )
            ))}
          </MapContainer>
        </div>

      </div>
    </div>
  )
}

export default Carte