import React from 'react'
import { FaSearch } from 'react-icons/fa'

const BarraPesquisa = () => {
  return (
    <div className='bg-slate-900 h-1/8 p-1 rounded-xl grid grid-rows-2'>
        <div className='flex justify-center items-center'>
          <h1 className='text-2xl font-bold text-slate-200 hover:scale-125 hover:text-blue-900 duration-500'>Weather API</h1>
        </div>
        <div className='grid grid-cols-12 px-2 gap-3 items-center justify-center'>
          <input type="text" className='rounded-md h-1/3 w-full focus:outline-none p-4 bg-slate-200 col-span-10' placeholder='Type a city or a country'/>
          <button className='bg-slate-300 p-2 rounded-full col-span-2 flex justify-center w-4/5'>
            <FaSearch/>
          </button>
          </div>
    </div>
  )
}

export default BarraPesquisa