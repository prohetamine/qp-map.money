import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Geo from './geo'
import cancel from './assets/cancel.svg'
import geo from './assets/geo.svg'
import { geolocated } from 'react-geolocated'
import { EmojiProvider, Emoji } from 'react-apple-emojis'
import emojiData from 'react-apple-emojis/lib/data.json'

const Card = styled(motion.div)`
  width: 100%;
  height: 2000px;
  position: absolute;
  left: 0px;
  top: 0px;
  background: #FFFFFF;
  box-shadow: 0px 0px 6px rgba(163, 163, 163, 0.51);
  border-radius: 37px 37px 0px 0px;
  padding: 10px 30px 38px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Tap = styled.div`
  width: 81px;
  height: 8px;
  background: #EFEFEF;
  border-radius: 12px;
  margin: 0 auto;
  margin-bottom: 23px;
`

const Description = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  margin-bottom: 15px;
  width: 100%;
  color: #000000;
`

const RowButton = styled.div`
  margin-top: 8px;
  margin-bottom: 23px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const ConfirmButton = styled(motion.div)`
  position: relative;
  width: calc(100% - 47px);
  height: 37px;
  background: #7AD06C;
  border-radius: 7px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CancelButton = styled(motion.div)`
  width: 37px;
  height: 37px;
  background: #DD7575;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Icon = styled(motion.div)`
  width: 20px;
  height: 20px;
`

const Footer = styled(motion.div)`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: #B7B7B7;
  display: flex;
  margin: 0 auto;
`

export default ({ isShow, onChange }) => {
  const [isConfirmedGeo, setConfirmedGeo] = useState(false)
  const [isRejectGeo, setRedjectGeo] = useState(false)

  const offsetY = (() => {
    if (window.innerWidth <= 320) {
      return window.innerHeight / 2
    }

    if (window.innerWidth <= 480) {
      return window.innerHeight / 2.3
    }

    if (window.innerWidth <= 768) {
      return window.innerHeight / 1.4
    }

    return window.innerHeight / 1.5
  })()

  return (
    <EmojiProvider data={emojiData}>
      <Card
        inital={{ y: offsetY }}
        animate={{ y: isShow ? offsetY : window.innerHeight * 5 }}
        drag='y'
        dragElastic={0.1}
        dragConstraints={{ top: 100, bottom: offsetY }}
      >
        <Tap />
        <Description>Привет, сейчас ты увидишь места на карте где побывала твоя уникальная купюра <Emoji name="round-pushpin" style={{ marginLeft: '3px' }} width={15} height={15} /></Description>
        <Description>Cканируя QR код ты можешь оставить свою метку на карте, тем самым сделав путишествие купюры еще интересней <Emoji name="grinning-face-with-smiling-eyes" style={{ marginLeft: '3px' }} width={15} height={15} /></Description>
        <Description>Следуй инструкциям или просто скрой <Emoji name="prohibited" style={{ marginLeft: '3px' }} width={15} height={15} /></Description>
        <RowButton>
          <ConfirmButton whileTap={{ opacity: 0.8 }} onTap={() => setConfirmedGeo(true)}>
            Разрешаю геолокацию
            {
              window.innerWidth > 347
                ? (
                  <Icon
                    style={{ position: 'absolute', right: '10px', marginLeft: '7px', backgroundImage: `url(${geo})` }}
                    animate={{
                      rotate: isRejectGeo
                                ? [0, 0]
                                : isConfirmedGeo
                                  ? [3, 5, 0, -23, -5, 0, 12, 9, 0, -17, -9, 0, 12, 35, 0, -12, -25, 0, 22, 15, 0, -19, -15, 0, 17, 9, 0, -7, -9, 0, 3, 5, 0, -33, -5, 0]
                                  : [0, 0]
                    }}
                    transition={{
                      duration: 8,
                      ease: 'easeInOut',
                      loop: Infinity,
                      repeatDelay: 0.2,
                    }}
                  />
                )
                : null
            }
          </ConfirmButton>
          <CancelButton whileTap={{ opacity: 0.8 }} onTap={() => onChange(null)}>
            <Icon style={{ backgroundImage: `url(${cancel})` }} />
          </CancelButton>
        </RowButton>
        <Footer>Сделано c <Emoji name="red-heart" style={{ margin: '3px', marginTop: '2px' }} width={15} height={15} /> клавиатуры</Footer>
        {
          isConfirmedGeo
            ? (
              <Geo
                onGeoError={e => {
                  alert(e)
                  setRedjectGeo(true)
                }}
                onChange={data => onChange(data)}
              />
            )
            : null
        }
      </Card>
    </EmojiProvider>
  )
}
