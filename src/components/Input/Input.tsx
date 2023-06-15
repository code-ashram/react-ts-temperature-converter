import {FC, ChangeEvent} from 'react';

import {UNIT_CODE} from "../../constants.ts";

type Props = {
    initialUnit: boolean,
    value: number,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<Props> = ({initialUnit, value, onChange}) => (
    <>
        <label htmlFor="input" className="mb-1">Enter temperature {initialUnit ? UNIT_CODE.F : UNIT_CODE.C}°
            here:</label>
        <input type="number" defaultValue={value} onChange={onChange}
               className="converter__input p-1 mb-5 text-black bg-gray-600 border-2 border-black rounded"
               id="input"/>
    </>
)

export default Input
