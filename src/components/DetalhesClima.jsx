import React from 'react'

const DetalhesClima = ({weather}) => {


  return (
    <div className='bg-slate-900 h-2/3 rounded-md text-slate-300 flex flex-col'>
        <div className='flex flex-col items-center gap-2 border border-blue-950 rounded-md'>
            <h1 className='text-xl'>{weather.city}, {weather.region}, {weather.country}</h1>
            <img src={weather.icon} alt="imagem da cidade" className='w-24'/>
            <p className='italic font-medium'>{weather.text}</p>
        </div>
        <div className='border border-blue-950  h-full rounded-md flex justify-center items-center gap-2 p-4'>
            <div className='shadow-blue-700 shadow  text-sm border border-blue-950 h-1/2 w-1/2 text-center flex justify-center items-center rounded-md'>
            Temperatura: <br /> {weather.temperature}ºC
            </div>
            <div className='shadow-blue-700 shadow  text-sm border border-blue-950 h-1/2 w-1/2  text-center flex justify-center items-center rounded-md'>Humidade: <br /> {weather.humidity}</div>
            <div className='shadow-blue-700 shadow text-sm  border border-blue-950 h-1/2 w-1/2  text-center flex justify-center items-center rounded-md'>Vento: <br /> {weather.wind_kph}kph {weather.wind_dir}</div>
        </div>
        <div className='h-1/4 flex justify-center items-center gap-12'>
            <p className='italic '>Dia: {weather.day}</p>
            <p className='italic '>Mês: {weather.month}</p>
            <p className='italic '>Ano: {weather.year}</p>
        </div>
    </div>
  )
}

export default DetalhesClima