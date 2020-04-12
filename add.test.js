import add from './add'

// Step 1
describe.each([
  [null  , 0, 'null should return 0'],
  [''    , 0, 'empty string should return 0'],
  ['    ', 0, 'empty string with spaces should return 0'],
  ['1'   , 1, "string of '1' should return 1"],
  ['1,2' , 3, "string of '1,2' should return 3"],
])('.add(%s) returns %i', (input, output, description) => {
  test(description, () => {
    expect(add(input)).toBe(output)
  })
})

// Step 2
describe.each([
  ['1,2,3'    , 6 ],
  ['1,2,3,4'  , 10],
  ['1,2,3,4,5', 15],
])('Unknown amount of numbers should add up', (input, output) => {
  test(`Adds all the numbers up to ${output}`, () => {
    expect(add(input)).toBe(output)
  })
})

// Step 3
describe.each([
  ['1\n2,3'   , 6 ],
  ['1\n2,3\n4', 10],
])('Take new line as delimiter', (input, output) => {
  test(`Adds all the numbers up to ${output}`, () => {
    expect(add(input)).toBe(output)
  })
})

// Step 4
describe.each([
  ["//;\n1;2"     , 3 ],
  ["//%\n1%2%3"   , 6 ],
  ["//%\n1%2%3\n4", 10],
  ["//;:\n1;:2"   , 3 ],
])('Special declaration for default delimiter', (input, output) => {
  test(`Adds all the numbers up to ${output}`, () => {
    expect(add(input)).toBe(output)
  })
})