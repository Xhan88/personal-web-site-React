import React from 'react'

const Loading = () => {
  
  useEffect(() => {
    return () => {
      console.log('dismounting')
    }
  })

  return (
    <div className='spinner-border' role='status'>
      <span className='sr-only'></span>
      
    </div>
  )
}

export default Loading
