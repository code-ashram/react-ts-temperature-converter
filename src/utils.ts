export const result = (unit: string, value: number): string => unit === 'C'
    ? ((value - 32) * 5 / 9).toFixed(1)
    : ((value * 9 / 5) + 32).toFixed(1)

export const unitName = (unit: string): string => unit === 'C' ? "Fahrenheit" : "Celsius"
