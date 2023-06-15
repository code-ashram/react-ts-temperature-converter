import {ChangeEvent, useState, FC} from 'react';
import {convertTemperature} from '../utils.ts'
import {UNIT_CODE, UNIT_NAME} from "../constants.ts";
import './App.css'
import Input from "../components/Input";
import Button from "../components/Button";
import Output from "../components/Output";

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

            <Input initialUnit={isCelsius} value={value} onChange={handleChangeValue}/>
            <Button onClick={handleToggleUnit} unitName={isCelsius ? UNIT_NAME.Fahrenheit : UNIT_NAME.Celsius}/>
            <Output conversionResult={convertTemperature(unit, value)} unit={unit}/>
        </div>
    )
}

export default App
