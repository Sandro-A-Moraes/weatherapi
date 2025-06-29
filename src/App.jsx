import React, { useEffect, useState } from 'react'
import BarraPesquisa from './components/BarraPesquisa'
import DetalhesClima from './components/DetalhesClima'

const App = () => {
  // Criando os estados weather (objeto) e city
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState('Maraba')

  useEffect(()=>{
    // Parâmetros constantes da API
    const apiKey = '311c61f2f4cb46c886f164507252106'
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=pt`

    // Função que vai chamar a API
    async function fetchWeather(){
      const response = await fetch(url)
      const jsonBody = await response.json()
      
      const localtime = jsonBody.location.localtime
      const [date, hour] = localtime.split(' ')
      const [year, month, day] = date.split('-')

      // set do weather que transforma weather em um objeto
      setWeather({
        city: jsonBody.location.name,
        region: jsonBody.location.region,
        country: jsonBody.location.country,
        year: year,
        month: month,
        day: day,
        hour: hour,
        temperature: jsonBody.current.temp_c,
        wind_kph: jsonBody.current.wind_kph,
        wind_dir: jsonBody.current.wind_dir,
        isDay: jsonBody.current.is_day,
        icon: jsonBody.current.condition.icon,
        text: jsonBody.current.condition.text,
        humidity: jsonBody.current.humidity,
      })
      
    }

    fetchWeather()
  }, [city]) //Cada vez que o estado de city mudar, fetchWeather() é chamado

  const backgroundColor1 = weather?.isDay === 1 ? 'from-blue-200' : 'from-blue-900'
  const backgroundColor2 = weather?.isDay === 1 ? 'to-blue-400' : 'to-blue-950'
  
  return (
    <div className={`flex flex-col justify-center items-center h-screen bg-gradient-to-b ${backgroundColor1} ${backgroundColor2}`}>
      
      <div className=' max-sm:w-4/5 sm:w-3/5 max-md:w-2/3 md:w-1/2 lg:w-1/3 h-5/6 flex flex-col rounded-xl gap-8'>
        {/* prop isDay, passando o atributo isDay e prop onSearch passando a função setCity() */}
        <BarraPesquisa isDay={weather?.isDay} onSearch={setCity}/>
         {/* prop isDay, passando o atributo isDay e prop weather passando o objeto weather */}
        <DetalhesClima weather={weather} isDay={weather?.isDay}/>
      </div>
    </div>
  )
}

export default App