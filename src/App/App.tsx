import {ChangeEvent, useState, FC} from 'react';
import {convertTemperature} from '../utils.ts'
import {UNIT_CODE, UNIT_NAME} from "../constants.ts";
import './App.css'

const App: FC = () => {
    const [value, setValue] = useState<number>(0)
    const [unit, setUnit] = useState<UNIT_CODE>(UNIT_CODE.C)

    const isCelsius: boolean = unit === UNIT_CODE.C

    const handleChangeValue = ((e: ChangeEvent<HTMLInputElement>) => setValue(Number(e.target.value)))

    const handleToggleUnit = (): void =>
        setUnit(prevUnit => prevUnit === UNIT_CODE.C ? UNIT_CODE.F : UNIT_CODE.C)

    return (
        <div className="converter">
            <h1 className="mb-5 text-3xl font-bold underline">Temperature Converter</h1>

            <label htmlFor="input" className="mb-1">Enter temperature {isCelsius ? UNIT_CODE.F : UNIT_CODE.C}° here:</label>
            <input type="number" defaultValue={value} onChange={handleChangeValue}
                   className="converter__input p-1 mb-5 text-black bg-gray-600 border-2 border-black rounded"
                   id="input"/>

            <button onClick={handleToggleUnit}
                    className="converter__btn mb-3 p-2 font-semibold bg-blue-500 rounded border-2 border-blue-500 hover:bg-blue-700 hover:border-blue-500 active:border-blue-400 ">Switch
                to {isCelsius ? UNIT_NAME.Fahrenheit : UNIT_NAME.Celsius}</button>

            <label htmlFor="output" className="mb-1">You'll get:</label>
            <output
                className="converter__output text-black font-semibold text-lg text-center rounded bg-gray-600 border-solid border-2 border-black"
                id="output">{convertTemperature(unit, value)} °{unit}
            </output>
        </div>
    )
}

export default App
