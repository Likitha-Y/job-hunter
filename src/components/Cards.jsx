import React from 'react'

const Cards = ({children,bg}) => {
  return (
    <div className='bg-indigo-100 p-6 rounded-lg shadow-md' >
        {children}
      
    </div>
  )
}

export default Cards
