import add from './add'

test('empty string should return 0', () => {
  expect(add('')).toBe(0)
})

test('empty null should return 0', () => {
  expect(add(null)).toBe(0)
})

test('empty string with spaces should return 0', () => {
  expect(add('    ')).toBe(0)
})

test("string of '1' should return 1", () => {
  expect(add('1')).toBe(1)
})

test("string of '1,2' should return 3", () => {
  expect(add('1,2')).toBe(3)
})