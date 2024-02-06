import React, { useEffect, useState } from 'react'

function Color() {
    const [color,setColor] = useState('#15424b')
    const click = color =>{
        setColor(color)
    }
    useEffect(()=>{
        document.body.style.backgroundColor =  color
    },[color])
  return (
      <div>

        <button onClick={
            ( ) => {click("orange")} 
        } className='col'></button>
    </div>
  )
}

export default Color