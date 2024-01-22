import React from 'react'

export default function Card(props) {
    
    const cardClass = 'card ' + props.className;
  
    return (
    <div className={cardClass}>
        {props.children}
    </div>
  )
}