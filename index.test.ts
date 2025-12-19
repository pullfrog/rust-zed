import { describe, it, expect } from 'vitest'
import { add, multiply, subtract, divide, quicksort } from './index.js'

describe('add function', () => {
  it('should add two positive numbers correctly', () => {
    expect(add(2, 3)).toBe(5)
  })

  it('should add negative numbers correctly', () => {
    expect(add(-2, -3)).toBe(-5)
  })

  it('should add positive and negative numbers correctly', () => {
    expect(add(5, -3)).toBe(2)
  })

  it('should handle zero correctly', () => {
    expect(add(0, 5)).toBe(5)
    expect(add(5, 0)).toBe(5)
    expect(add(0, 0)).toBe(0)
  })

  it('should handle decimal numbers correctly', () => {
    expect(add(1.5, 2.5)).toBe(4)
    expect(add(0.1, 0.2)).toBeCloseTo(0.3)
  })
})

describe('multiply function', () => {
  it('should multiply two positive numbers correctly', () => {
    expect(multiply(3, 4)).toBe(12)
  })

  it('should multiply negative numbers correctly', () => {
    expect(multiply(-2, 3)).toBe(-6)
    expect(multiply(-2, -3)).toBe(6)
  })

  it('should handle zero correctly', () => {
    expect(multiply(5, 0)).toBe(0)
    expect(multiply(0, 5)).toBe(0)
  })
})

describe('subtract function', () => {
  it('should subtract two positive numbers correctly', () => {
    expect(subtract(10, 3)).toBe(7)
  })

  it('should handle negative numbers correctly', () => {
    expect(subtract(5, -3)).toBe(8)
    expect(subtract(-5, 3)).toBe(-8)
  })

  it('should handle zero correctly', () => {
    expect(subtract(5, 0)).toBe(5)
    expect(subtract(0, 5)).toBe(-5)
  })
})

describe('divide function', () => {
  it('should divide two positive numbers correctly', () => {
    expect(divide(10, 2)).toBe(5)
  })

  it('should handle negative numbers correctly', () => {
    expect(divide(-10, 2)).toBe(-5)
    expect(divide(10, -2)).toBe(-5)
  })

  it('should handle decimal results correctly', () => {
    expect(divide(10, 3)).toBeCloseTo(3.333, 2)
    expect(divide(7, 2)).toBe(3.5)
  })
})

describe('quicksort function', () => {
  it('should sort an unsorted array of positive numbers', () => {
    expect(quicksort([3, 1, 4, 1, 5, 9, 2, 6])).toEqual([1, 1, 2, 3, 4, 5, 6, 9])
  })

  it('should sort an array with negative numbers', () => {
    expect(quicksort([3, -1, 4, -5, 2, 0])).toEqual([-5, -1, 0, 2, 3, 4])
  })

  it('should handle an already sorted array', () => {
    expect(quicksort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
  })

  it('should handle a reverse sorted array', () => {
    expect(quicksort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
  })

  it('should handle an empty array', () => {
    expect(quicksort([])).toEqual([])
  })

  it('should handle a single element array', () => {
    expect(quicksort([42])).toEqual([42])
  })

  it('should handle an array with duplicate values', () => {
    expect(quicksort([5, 2, 8, 2, 9, 1, 5, 5])).toEqual([1, 2, 2, 5, 5, 5, 8, 9])
  })

  it('should handle an array with all same values', () => {
    expect(quicksort([7, 7, 7, 7])).toEqual([7, 7, 7, 7])
  })

  it('should handle decimal numbers', () => {
    expect(quicksort([3.5, 1.2, 4.8, 2.1])).toEqual([1.2, 2.1, 3.5, 4.8])
  })
})
