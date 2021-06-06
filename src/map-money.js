import React, { useEffect } from 'react'

export default ({ center, routes }) => {
  useEffect(() => {
    var myMap = null

    const init = () => {
      myMap = new window.ymaps.Map('map', {
        center,
        zoom: 10
      }, {
        searchControlProvider: 'yandex#search'
      })

      routes.forEach(({ color, money, route, isSelected }) => {
        const line = new window.ymaps.Polyline(route, {}, {
            balloonCloseButton: false,
            strokeColor: color,
            strokeWidth: 4,
            strokeOpacity: 0.8
        })

        route.forEach((point, i) =>
          myMap.geoObjects.add(
            new window.ymaps.Placemark(point, {
              iconCaption: (isSelected && route.length - 1 === i) ? money : null
            }, {
              preset: 'islands#circleDotIcon',
              iconColor: color
            })
          )
        )

        isSelected && myMap.geoObjects.add(line)
      })
    }

    const timerId = setInterval(() => {
      const controls  = document.querySelector('#map > ymaps > ymaps > ymaps > ymaps:nth-child(4)')
          , confirm   = document.querySelector('#map > ymaps > ymaps > ymaps > ymaps.ymaps-2-1-78-copyrights-pane > ymaps:nth-child(1) > ymaps > ymaps.ymaps-2-1-78-copyright__wrap > ymaps > ymaps.ymaps-2-1-78-copyright__content-cell > ymaps')
          , openMap   = document.querySelector('#map > ymaps > ymaps > ymaps > ymaps.ymaps-2-1-78-copyrights-pane > ymaps.ymaps-2-1-78-map-copyrights-promo')

      controls && (controls.style.top = '-999999px')
      confirm && (confirm.style.display = 'none')
      openMap && (openMap.style.display = 'none')
    }, 100)

    window.ymaps.ready(init)
    return () => {
      if (myMap) {
        myMap.destroy()
      }
      clearInterval(timerId)
    }
  }, [center, routes])

  return (
    <div id='map' style={{ position: 'absolute', left: '0px', top: '0px', width: '100%', height: '100vh', minHeight: '100vh', padding: '0', margin: '0' }}></div>
  )
}
