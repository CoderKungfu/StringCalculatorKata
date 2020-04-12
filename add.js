const EXPECTED_NUMS = 2
const DELIMITER = ','

const isValidInput = (input) => {
  if(typeof input !== 'string') return false
  if(input.length < 1) return false

  return true
}

const add = (numbers) => {
  if (!isValidInput(numbers)) return 0

  const intArray = numbers.split(DELIMITER)
  if (intArray.length == EXPECTED_NUMS)
    return Number(intArray[0]) + Number(intArray[1])
  else
    return Number(intArray[0])
}
export default add