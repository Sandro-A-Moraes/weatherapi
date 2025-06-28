import React from 'react'

const DetalhesClima = ({weather, isDay}) => {

  const backgroundCard = isDay === 1 ? 'bg-slate-300' : 'bg-slate-900'
  const textCard = isDay === 1 ? 'text-slate-950' : 'text-slate-300'

  const borderCard = isDay === 1 ? 'border-gray-400' : 'border-blue-950'

  const shadowCard = isDay === 1 ? 'shadow-gray-400' : 'shadow-blue-700'

  return (
    <div className={`${backgroundCard} h-2/3 rounded-md ${textCard} flex flex-col`}>
      {weather ? (<>
          <div className={`flex flex-col items-center gap-2 border ${borderCard} rounded-t-md`}>
            <h1 className='text-xl pt-1'>{weather.city}, {weather.region}, {weather.country}</h1>
            <img src={weather.icon} alt="imagem da cidade" className='w-24'/>
            <p className='italic font-medium'>{weather.text}</p>
        </div>
        
        <div className={`border ${borderCard}  h-full  flex justify-center items-center gap-2 p-4`}>
            <div className={`${shadowCard} shadow  text-sm border border-blue-950 h-1/2 w-1/2 text-center flex justify-center items-center rounded-md hover:scale-125 duration-500`}>
            Temperatura: <br /> {weather.temperature}ºC
            </div>
            <div className={`${shadowCard} shadow  text-sm border border-blue-950 h-1/2 w-1/2  text-center flex justify-center items-center rounded-md hover:scale-125 duration-500`}>Humidade: <br /> {weather.humidity}</div>
            <div className={`${shadowCard} shadow text-sm  border border-blue-950 h-1/2 w-1/2  text-center flex justify-center items-center rounded-md hover:scale-125 duration-500`}>Vento: <br /> {weather.wind_kph}kph {weather.wind_dir}</div>
        </div>
        
        <div className='h-1/9 flex justify-center items-center p-2'>
            <p>{`${weather.day}/${weather.month}/${weather.year} ${weather.hour}`}</p>
        </div>
        </>) : (
          <p className='text-3xl text-gray-200 text-center'>Carregando...</p>
        )}

        
      
    </div>
  )
}

export default DetalhesClima