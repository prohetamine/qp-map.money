import React, { useEffect } from 'react'
import { geolocated } from 'react-geolocated'

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: Infinity,
  }
})(({
  onGeoError,
  onChange,
  isGeolocationAvailable,
  isGeolocationEnabled,
  coords
}) => {
  useEffect(() => {
    if (!isGeolocationAvailable) {
      return onGeoError('Ваш браузер не поддерживает геолокацию :(')
    }

    if (!isGeolocationEnabled) {
      return onGeoError('Геолокация не включена :(')
    }

    if (coords && coords.latitude && coords.longitude) {
      return onChange([coords.latitude, coords.longitude])
    }
  }, [
    isGeolocationAvailable,
    isGeolocationEnabled,
    coords
  ])

  return (<div></div>)
})
