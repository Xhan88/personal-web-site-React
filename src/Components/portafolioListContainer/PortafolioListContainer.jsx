import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './PortafolioListContainer.css'
import { GFetch } from '../../GFetch/GFetch' 

const PortafolioListContainer = () => {
  const [ proyects, setProyect ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const { proyecto } = useParams()

  useEffect(() => {
    if(proyecto) {
      GFetch()
        .then(data => setProyect(data.filter(prod => prod.image === proyecto)))
        .catch(err => console.log(err))
        .finaly(() => setLoading(false))
    } else {
      GFetch()
      .then(data => setProyect(data))
      .catch(err => console.log(err))
      .finaly(() => setLoading(false))
    }

  }, [proyecto])
  return (
   <div>
     { loading ?
          <h2> ..... </h2>
        :
        <PortafolioList proyects={proyects}/>}

   </div>
  )
}

export default PortafolioListContainer
