import add from './add'

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
