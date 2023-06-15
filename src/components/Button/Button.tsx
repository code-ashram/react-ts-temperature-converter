import {FC, MouseEvent} from "react";
import {UNIT_NAME} from "../../constants.ts";

type Props = {
    onClick: (e: MouseEvent<HTMLButtonElement>) => void,
    unitName: UNIT_NAME,
}
const Button: FC<Props> = ({onClick, unitName}) => (
    <button onClick={onClick}
            className="converter__btn mb-3 p-2 font-semibold bg-blue-500 rounded border-2 border-blue-500 hover:bg-blue-700 hover:border-blue-500 active:border-blue-400 ">Switch
        to {unitName}</button>
)

export default Button
