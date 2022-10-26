import React from 'react'

function Botton({value, btnClick, idx}) {
  return (
    <button onClick={(e) => btnClick(idx)} className={`${value === "x" ? ' text-red-600' : 'text-blue-600' } shadow-xl text-7xl w-20 h-20 rounded-lg flex justify-center border font-bold`}>{value}</button>
  )
}

export default Botton