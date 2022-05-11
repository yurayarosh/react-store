export const filterCurrency = (value: number, currency: string = 'USD') => {
  return new Intl.NumberFormat('ua-UA', { style: 'currency', currency }).format(value)
}
