import React, { Children } from 'react'
import { InfoImage, InfoStyleCard } from './styled/InfoStyleCard'

function InfoCard({children}) {
  return (
    <InfoStyleCard>
        {children}
    </InfoStyleCard>
  )
}

export default InfoCard