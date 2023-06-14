import React, {useState, FC} from 'react';
import {result, unitName} from '../utils.ts'
import './App.css'

const App: FC = () => {
    const [value, setValue] = useState<number>(0)
    const [unit, setUnit] = useState<string>('C')

    const handleChangeValue = ((e: React.ChangeEvent<HTMLInputElement>) => setValue(Number(e.target.value)))

    const handleChangeUnit = (): void =>
        setUnit(prevTemperatureState => prevTemperatureState === 'C' ? 'F' : 'C')

    return (
        <div className="converter">
            <h1 className="mb-5 text-3xl font-bold underline">Temperature Converter</h1>

            <label htmlFor="input" className="mb-1">Enter temperature {unitName(unit)[0]}° here:</label>
            <input type="number" defaultValue={value} onChange={handleChangeValue}
                   className="converter__input p-1 mb-5 text-black bg-gray-600 border-2 border-black rounded"
                   id="input"/>

            <button onClick={handleChangeUnit}
                    className="converter__btn mb-3 p-2 font-semibold bg-blue-500 rounded border-2 border-blue-500 hover:bg-blue-700 hover:border-blue-500 active:border-blue-400 ">Switch
                to {unitName(unit)}</button>

            <label htmlFor="output" className="mb-1">You'll get:</label>
            <output
                className="converter__output text-black font-semibold text-lg text-center rounded bg-gray-600 border-solid border-2 border-black"
                id="output">{result(unit, value)} °{unit}
            </output>
        </div>
    )
}

export default App
