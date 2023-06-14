import React, { useState } from 'react';
import './App.css'

const App = () => {

    const [value, setValue] = useState(0)
    const [temperatureType , setTemperatureType] = useState('C')

    const changeValueHandler = ((e: React.ChangeEvent<HTMLInputElement>) => setValue(Number(e.target.value)))
    const changeTemperatureTypeHandler = (): void =>
        setTemperatureType(prevTemperatureState => prevTemperatureState === 'C' ? 'F' : 'C')


    const result: string = temperatureType === 'C'
        ? ((value - 32) * 5 / 9).toFixed(1)
        : ((value * 9 / 5) + 32).toFixed(1)

    const temperatureName: string = temperatureType === 'C' ? "Fahrenheit" : "Celsius"

    return (
        <div className="converter">
            <h1 className="mb-5 text-3xl font-bold underline">Temperature Converter</h1>

            <label htmlFor="input" className="mb-1">Enter temperature {temperatureName[0]}° here:</label>
            <input type="number" defaultValue={value} onChange={changeValueHandler} className="converter__input p-1 mb-5 text-black bg-gray-600 border-2 border-black rounded" id="input"/>

            <button onClick={changeTemperatureTypeHandler} className="converter__btn mb-3 p-2 font-semibold bg-blue-500 rounded border-2 border-blue-500 hover:bg-blue-700 hover:border-blue-500 active:border-blue-400 ">Switch to {temperatureName}</button>

            <label htmlFor="output" className="mb-1">You'll get:</label>
            <output
                className="converter__output text-black font-semibold text-lg text-center rounded bg-gray-600 border-solid border-2 border-black"
                id="output">{result} °{temperatureType}
            </output>
        </div>
    )
}

export default App
