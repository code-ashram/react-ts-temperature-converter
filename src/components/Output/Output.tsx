import {FC} from "react";
import {UNIT_CODE} from "../../constants.ts";

type Props = {
    conversionResult: string,
    unit: UNIT_CODE,
}
const Output: FC<Props> = ({conversionResult, unit}) => (
    <>
        <label htmlFor="output" className="mb-1">You'll get:</label>
        <output
            className="converter__output text-black font-semibold text-lg text-center rounded bg-gray-600 border-solid border-2 border-black"
            id="output">{conversionResult} °{unit}
        </output>
    </>
)

export default Output
