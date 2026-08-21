import { describe, expect, it } from 'vitest'
import { searchMatrix } from './search-2d-matrix'

describe('searchMatrix', () => {
  const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ]

  it('finds a target present in the matrix', () => {
    expect(searchMatrix(matrix, 3)).toBe(true)
  })

  it('returns false for a target not present in the matrix', () => {
    expect(searchMatrix(matrix, 13)).toBe(false)
  })

  it('finds a target at the very start of a row', () => {
    expect(searchMatrix(matrix, 23)).toBe(true)
  })

  it('finds a target at the very end of the matrix', () => {
    expect(searchMatrix(matrix, 60)).toBe(true)
  })

  it('handles a single-cell matrix', () => {
    expect(searchMatrix([[5]], 5)).toBe(true)
  })
})
