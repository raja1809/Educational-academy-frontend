import React from 'react'
import './ExpB.css'

const ExpB = ({head,title,description,style}) => {
  return (
    <div style={{...style}} className='expb'>
        <h1>{head}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default ExpB