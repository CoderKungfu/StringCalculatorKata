const DEFAULT_DELIMITER = ','

const isValidInput = (input) => {
  if(typeof input !== 'string') return false
  if(input.length < 1) return false

  return true
}

const normalizeDelimiters = (input, defaultDelimiter) => input.replace(/[\n\r]/g, defaultDelimiter)

const defineDelimiter = (input) => {
  const matches = input.match(/^\/\/(\S+)[\n\r]/)
  if (matches) {
    const newDelimiter = matches[1]
    return [newDelimiter, input.slice(matches[0].length - 1)]
  }
  return [DEFAULT_DELIMITER, input]
}

const add = (numbers) => {
  if (!isValidInput(numbers)) return 0

  const [defaultDelimiter, cleanedInput] = defineDelimiter(numbers)
  const intArray = normalizeDelimiters(cleanedInput, defaultDelimiter).split(defaultDelimiter)
  if (intArray.length === 1) return Number(intArray[0])
  
  const reducer = (accumulator, curentValue) => {
    return accumulator + Number(curentValue)
  }
  return intArray.reduce(reducer, 0)
}
export default add