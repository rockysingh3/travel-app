import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'


const App = () => {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 37.6,
    longitude: -95.665,
    zoom: 3
  })

  return (
    <ReactMapGL 
      {...viewport}
      mapboxApiAccessToken={'pk.eyJ1Ijoicm9ja3lzaW5naCIsImEiOiJja2UwcDFyMHIwbHBpMnhwNzVka201OTgzIn0.XjaYR69LW-Vg5xwU-k0Xdw'}
      onViewportChange={setViewport}
    />
  )
}


export default App;