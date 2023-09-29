'use client'

import { Map as MapGL } from 'react-map-gl'
import DeckGL from '@deck.gl/react/typed'
import { LineLayer } from '@deck.gl/layers/typed'

export default function Map({ token }: { token: string }) {
  const data = [
    {
      sourcePosition: [-122.41669, 37.7853],
      targetPosition: [-122.41669, 37.781],
    },
  ]
  const layers = [new LineLayer({ id: 'line-layer', data })]
  return (
    <DeckGL
      initialViewState={{
        longitude: 135.839478,
        latitude: 35.652832,
        pitch: 45,
        bearing: -25,
        zoom: 6,
      }}
      controller={true}
      layers={layers}
    >
      <MapGL
        mapboxAccessToken={token}
        mapStyle="mapbox://styles/mapbox/dark-v11"
      />
    </DeckGL>
  )
}
