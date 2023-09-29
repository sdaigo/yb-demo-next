import Map from './components/map'

const mapboxAccessToken = process.env.MapboxAccessToken

export default function Home() {
  if (!mapboxAccessToken) {
    throw new Error('Mapbox token required')
  }

  return (
    <main style={{ height: '100vh' }}>
      <Map token={mapboxAccessToken} />
    </main>
  )
}
