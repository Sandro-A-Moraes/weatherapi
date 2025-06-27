import React, { useEffect, useState } from 'react'
import BarraPesquisa from './components/BarraPesquisa'
import DetalhesClima from './components/DetalhesClima'

const App = () => {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState('Cameta')

  useEffect(()=>{
    const apiKey = '311c61f2f4cb46c886f164507252106'
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=pt`

    async function fetchWeather(){
      const response = await fetch(url)
      const jsonBody = await response.json()
      
      const localtime = jsonBody.location.localtime
      const date = localtime.split(' ')[0] 
      const [year, month, day] = date.split('-')

      setWeather({
        city: jsonBody.location.name,
        region: jsonBody.location.region,
        country: jsonBody.location.country,
        year: year,
        month: month,
        day: day,
        temperature: jsonBody.current.temp_c,
        wind_kph: jsonBody.current.wind_kph,
        wind_dir: jsonBody.current.wind_dir,
        is_day: jsonBody.current.is_day,
        icon: jsonBody.current.condition.icon,
        text: jsonBody.current.condition.text,
        humidity: jsonBody.current.humidity,
      })
      
    }

    fetchWeather()
  }, [])

  return (
    <div className={`flex flex-col justify-center items-center h-screen bg-gradient-to-b from-blue-900 to-blue-950`}>
      <div className=' w-4/5 h-5/6 flex flex-col rounded-xl gap-8'>
        <BarraPesquisa/>
        <DetalhesClima weather={weather}/>
      </div>
    </div>
  )
}

export default App