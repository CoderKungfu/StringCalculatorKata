const DELIMITER = ','

const isValidInput = (input) => {
  if(typeof input !== 'string') return false
  if(input.length < 1) return false

  return true
}

const add = (numbers) => {
  if (!isValidInput(numbers)) return 0

  const intArray = numbers.split(DELIMITER)
  if (intArray.length === 1) return Number(intArray[0])
  
  const reducer = (accumulator, curentValue) => {
    return accumulator + Number(curentValue)
  }
  return intArray.reduce(reducer, 0)
}
export default add