import {UNIT_CODE} from "./constants.ts";

export const convertTemperature = (unit: UNIT_CODE, value: number): string => (unit === UNIT_CODE.C
    ? (value - 32) * 5 / 9
    : (value * 9 / 5) + 32)
    .toFixed(1)
