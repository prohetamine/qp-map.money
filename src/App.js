import React, { useEffect, useState }     from 'react'
import MapMoney         from './map-money'
import Hello from './hello'
import Filter from './filter'
import ReutesDefault from './routes-default'
import Api from './api'
import queryString from 'query-string'

export default () => {
  const [state, setState] = useState({
    pointRoutes: ReutesDefault,
    currentGeo: [55.7522, 37.6156],
    userGeo: null,
    isHello: false
  })

  const { hash = 0 } = queryString.parse(window.location.search)

  useEffect(() => {
    if (!state.isHello) {
      return
    }

    ;(async () => {
      const EndPointLoad  = await Api.getEndPoint(hash)
          , RoutesLoad    = await Api.getPointsRoutes(hash, state.userGeo || EndPointLoad)

      setState(
        state => ({
          ...state,
          currentGeo: state.userGeo || EndPointLoad,
          pointRoutes: ReutesDefault.map(
            point => ({
              ...point,
              ...(
                RoutesLoad[
                  RoutesLoad.findIndex(
                    _point =>
                      _point.hash === point.hash
                  )
                ] : {}
              )
            })
          )
        })
      )
    })()
  }, [state.isHello])

  return (
    <div>
      <MapMoney
        center={state.currentGeo}
        routes={state.pointRoutes}
      />
      <Filter
        isShow={state.isHello}
        onChange={
          hash =>
            setState(
              state => ({
                ...state,
                pointRoutes: state.pointRoutes.map(
                  point =>
                    point.hash === hash
                      ? ({
                        ...point,
                        isSelected: true
                      })
                      : ({
                        ...point,
                        isSelected: false
                      })
                ),
                currentGeo: (
                  getEndPoint =>
                    getEndPoint.route[getEndPoint.route.length - 1] ||
                    state.userGeo ||
                    state.currentGeo
                  )(
                    state.pointRoutes.find(
                      point =>
                        point.hash === hash
                      )
                  )
              })
            )
        }
      />
      <Hello
        isShow={!state.isHello}
        onChange={
          userGeo =>
            setState(
              state => ({
                ...state,
                isHello: true,
                userGeo
              })
            )
        }
      />
    </div>
  )
}
