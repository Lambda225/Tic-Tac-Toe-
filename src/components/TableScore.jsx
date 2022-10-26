import React from 'react'

function TableScore({xUser,score}) {
  return (
    <div className='flex w-[300px] mb-10 rounded-lg overflow-hidden shadow-lg'>
      <div className={`w-1/2 text-center text-2xl py-4 ${xUser && 'text-red-600 border-b-4 border-red-600' } duration-200 `}>X-{score.xScore}</div>
      <div className={`w-1/2 text-center text-2xl py-4 ${!xUser && 'text-blue-600 border-b-4 border-blue-600' } duration-200`}>O-{score.oScore}</div>
    </div>
  )
}

export default TableScore