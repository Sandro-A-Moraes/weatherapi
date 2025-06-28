import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const BarraPesquisa = ({isDay, onSearch}) => {
  const [input, setInput] = useState('')

  const handleClick = ()=>{
    if(input.trim() !== ''){
      onSearch(input)
      setInput('')
    }
  }

  const backgroundColor = isDay === 1 ? 'bg-slate-300' : 'bg-slate-900'
  const buttonBackgroundColor = isDay === 1 ? 'bg-slate-900' : 'bg-slate-300'
  const buttonColor = isDay === 1 ? 'text-slate-300' : 'text-slate-900'
  const borderCard = isDay === 1 ? 'border-gray-400' : 'border-blue-950'
  const textCard = isDay === 1 ? 'text-slate-950' : 'text-slate-300'
  

  return (
    <div className={`${backgroundColor} border ${borderCard} h-1/8 p-1 rounded-xl grid grid-rows-2`}>
        <div className={` flex justify-center items-center `}>
          <h1 className={`text-2xl font-bold ${textCard} hover:scale-125 hover:text-blue-900 duration-500`}>Weather API</h1>
        </div>
        <div className='grid grid-cols-12 px-2 gap-3 items-center justify-center'>
          <input value={input} onChange={(e) => setInput(e.target.value)} type="text" className='rounded-md h-1/3 w-full focus:outline-none p-4 bg-slate-200 col-span-10' placeholder='Type a city or a country'/>
          <button className={`${buttonBackgroundColor} p-2 rounded-full col-span-2 flex justify-center w-4/5 ${buttonColor}`} onClick={handleClick}>
            <FaSearch/>
          </button>
        </div>
    </div>
  )
}

export default BarraPesquisa