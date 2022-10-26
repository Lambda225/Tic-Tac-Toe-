import React from 'react'

function RestBtn({restClick}) {
  return (
    <div className=' mt-5 px-10 py-3 rounded-lg shadow-lg active:shadow text-white bg-blue-600 cursor-pointer' onClick={()=> restClick()}>Restat</div>
  )
}

export default RestBtn