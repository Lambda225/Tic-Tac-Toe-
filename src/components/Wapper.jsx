import React from 'react'
import Button from './Button'

function Wapper({btnValue,btnClick}) {
    
  return (
    <div className=' grid grid-cols-3 justify-center gap-3'>
        {
            btnValue.map((value,idx) =>{
                return <Button value={value} idx={idx} key={idx} btnClick={btnClick} />
            })
        }

    </div>
  )
}

export default Wapper