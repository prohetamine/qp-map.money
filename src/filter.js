import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import rub10 from './assets/10rub.svg'
import rub50 from './assets/50rub.svg'
import rub100 from './assets/100rub.svg'
import rub200 from './assets/200rub.svg'
import rub500 from './assets/500rub.svg'

import grivna1 from './assets/1grivna.svg'
import grivna2 from './assets/2grivna.svg'
import grivna5 from './assets/5grivna.svg'
import grivna10 from './assets/10grivna.svg'
import grivna20 from './assets/20grivna.svg'
import grivna50 from './assets/50grivna.svg'
import grivna100 from './assets/100grivna.svg'
import grivna200 from './assets/200grivna.svg'
import grivna500 from './assets/500grivna.svg'

import usd1 from './assets/1usd.svg'
import usd2 from './assets/2usd.svg'
import usd5 from './assets/5usd.svg'
import usd10 from './assets/10usd.svg'
import usd20 from './assets/20usd.svg'
import usd50 from './assets/50usd.svg'
import usd100 from './assets/100usd.svg'

import euro5 from './assets/5euro.svg'
import euro10 from './assets/10euro.svg'
import euro20 from './assets/20euro.svg'
import euro50 from './assets/50euro.svg'
import euro100 from './assets/100euro.svg'
import euro200 from './assets/200euro.svg'
import euro500 from './assets/500euro.svg'

const BgColor = styled(motion.div)`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100vh;
  background: rgba(148, 148, 148, 0);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
`

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
  align-items: center;
`

const TapButton = styled.div`
  width: 81px;
  height: 8px;
  background: #EFEFEF;
  border-radius: 12px;
  margin-bottom: 23px;
`

const RowCurrencyTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 9px;
`

const CurrencyTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #000000;
`

const LocationTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #B0B0B0;
`

const RowCurrency = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5px;
`

const IconCurrency = styled(motion.div)`
  min-width: 51.38px;
  width: 51.38px;
  height: 26px;
  margin-right: 10px;
  margin-bottom: 9px;
`

const animation = { scale: 0.9 }

export default ({ isShow, onChange }) => {
  const [flo, setFlo] = useState(0)
      , [cardState, setCardState] = useState(false)

  const offsetY = (() => {
    if (window.innerWidth <= 320) {
      return window.innerHeight / 2
    }

    if (window.innerWidth <= 480) {
      return window.innerHeight / 1.3
    }

    if (window.innerWidth <= 768) {
      return window.innerHeight / 1.4
    }

    return window.innerHeight / 1.2
  })()

  return (
    <div>
      {
        flo > 0.1
          ? (
            <BgColor
              animate={{
                webkitBackdropFilter: `blur(${flo * 9}px)`,
                backdropFilter: `blur(${flo * 9}px)`,
                background: `rgba(148, 148, 148, ${(flo / 4).toFixed(1)})`
              }}
            >
            </BgColor>
          )
          : null
      }
      <Card
        drag='y'
        onUpdate={info => {
          const flo = (info.y - 100) / (offsetY - 100)
              , invertFlo = 1 - flo

          setFlo(Math.abs(invertFlo))
        }}
        dragElastic={0.1}
        inital={{ y: window.innerHeight }}
        animate={{
          y: isShow
              ? cardState
                ? 100
                : offsetY
              : window.innerHeight
        }}
        dragConstraints={{ top: 100, bottom: offsetY }}
      >
          <TapButton onClick={() => setCardState(s => !s)} />
          <RowCurrencyTitle>
            <CurrencyTitle>Рубль</CurrencyTitle>
            <LocationTitle>Россия</LocationTitle>
          </RowCurrencyTitle>
          <RowCurrency>
            <IconCurrency whileTap={animation} onTap={() => onChange('d315510141ce7ba2705162cdb4d994d3')} style={{ backgroundImage: `url(${rub10})` }} />
            <IconCurrency whileTap={animation} onTap={() => onChange('f2da84363dd355fb576da5f0ce99b18c')} style={{ backgroundImage: `url(${rub50})` }} />
            <IconCurrency whileTap={animation} onTap={() => onChange('2d2043137b19b0d2e62ffafad914151d')} style={{ backgroundImage: `url(${rub100})` }} />
            <IconCurrency whileTap={animation} onTap={() => onChange('d410bfd083e1e003db2ac947895c6a3f')} style={{ backgroundImage: `url(${rub200})` }} />
            <IconCurrency whileTap={animation} onTap={() => onChange('365ed25b334c0ccea25263d7dec275a2')} style={{ backgroundImage: `url(${rub500})` }} />
          </RowCurrency>
          <RowCurrencyTitle>
            <CurrencyTitle>Гривня</CurrencyTitle>
            <LocationTitle>Україна</LocationTitle>
          </RowCurrencyTitle>
          <RowCurrency>
            <IconCurrency whileTap={animation} onTap={() => onChange('aa7e839302323a9b31d150389b85c938')} style={{ backgroundImage: `url(${grivna1})` }} />
            <IconCurrency whileTap={animation} onTap={() => onChange('289f8edc6c4ebfabf05e09a02a2d18c2')} style={{ backgroundImage: `url(${grivna2})` }} />
            <IconCurrency whileTap={animation} onTap={() => onChange('d128f87d77625f4f8c09de8d2191f76b')} style={{ backgroundImage: `url(${grivna5})` }} />
            <IconCurrency whileTap={animation} onTap={() => onChange('f1c3e5487323b0006bf8903abd5acc7a')} style={{ backgroundImage: `url(${grivna10})` }} />
            <IconCurrency whileTap={animation} onTap={() => onChange('55c0d1a6d1e49a77b8a2731a9c90ef2d')} style={{ backgroundImage: `url(${grivna20})` }} />
            <IconCurrency whileTap={animation} onTap={() => onChange('c1e80d1065da9681609375d11175b0a7')} style={{ backgroundImage: `url(${grivna50})` }} />
            <IconCurrency whileTap={animation} onTap={() => onChange('441846a92f15f60947acd1da055402f6')} style={{ backgroundImage: `url(${grivna100})` }} />
            <IconCurrency whileTap={animation} onTap={() => onChange('1ff9b34296d430e744f6db6224f9ee8e')} style={{ backgroundImage: `url(${grivna200})` }} />
            <IconCurrency whileTap={animation} onTap={() => onChange('53d62d50b3d6f96c8ffd8a4dc9fc7aaa')} style={{ backgroundImage: `url(${grivna500})` }} />
          </RowCurrency>
          <RowCurrencyTitle>
            <CurrencyTitle>Dollars</CurrencyTitle>
            <LocationTitle>USA</LocationTitle>
          </RowCurrencyTitle>
          <RowCurrency>
            <IconCurrency whileTap={animation} onTap={() => onChange('7b015acf50c73208fb1dd2ab44c56819')} style={{ backgroundImage: `url(${usd1})` }} />
            <IconCurrency whileTap={animation} onTap={() => onChange('ce0d9454f3160074f005d0a598484a84')} style={{ backgroundImage: `url(${usd2})` }} />
            <IconCurrency whileTap={animation} onTap={() => onChange('50772c984c23c075db883dc0f87adc89')} style={{ backgroundImage: `url(${usd5})` }} />
            <IconCurrency whileTap={animation} onTap={() => onChange('8be32529d0b6c607132cc5ad6f229dfe')} style={{ backgroundImage: `url(${usd10})` }} />
            <IconCurrency whileTap={animation} onTap={() => onChange('ca59f97fb0bed7f5739c2290e2d87229')} style={{ backgroundImage: `url(${usd20})` }} />
            <IconCurrency whileTap={animation} onTap={() => onChange('6da2a520a7f461459d022c7fe3d891f9')} style={{ backgroundImage: `url(${usd50})` }} />
            <IconCurrency whileTap={animation} onTap={() => onChange('1c06c6d1ad484315a1f117736fa60e80')} style={{ backgroundImage: `url(${usd100})` }} />
          </RowCurrency>
          <RowCurrencyTitle>
            <CurrencyTitle>Euro</CurrencyTitle>
            <LocationTitle>European Union</LocationTitle>
          </RowCurrencyTitle>
          <RowCurrency>
            <IconCurrency whileTap={animation} onTap={() => onChange('06a80477133ca378a30b3084f2f8d405')} style={{ backgroundImage: `url(${euro5})` }} />
            <IconCurrency whileTap={animation} onTap={() => onChange('0c0bb98342ace699b35dd08577e7611b')} style={{ backgroundImage: `url(${euro10})` }} />
            <IconCurrency whileTap={animation} onTap={() => onChange('6e197ca53a4f01e53fbecce1c7acd99a')} style={{ backgroundImage: `url(${euro20})` }} />
            <IconCurrency whileTap={animation} onTap={() => onChange('dd3dad0ac2ff316353a4eec359d5b046')} style={{ backgroundImage: `url(${euro50})` }} />
            <IconCurrency whileTap={animation} onTap={() => onChange('05c6dcc4e5a6617b5afaf794812cab68')} style={{ backgroundImage: `url(${euro100})` }} />
            <IconCurrency whileTap={animation} onTap={() => onChange('6782bb6dd9100e2b02c7dc048f0e38d8')} style={{ backgroundImage: `url(${euro200})` }} />
            <IconCurrency whileTap={animation} onTap={() => onChange('71759fb22be3515c3887dfdfa6e731fd')} style={{ backgroundImage: `url(${euro500})` }} />
          </RowCurrency>
      </Card>
    </div>
  )
}
