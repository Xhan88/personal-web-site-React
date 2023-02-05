import React from 'react'
import Portafolio from '../portafolio/Portafolio'

const PortafolioList = ({proyects}) => {
  return (
    
    proyects.map( proyect =>   <Portafolio key={proyect.proyecto} proyect={proyect} />  )
      
  )
}

export default PortafolioList
