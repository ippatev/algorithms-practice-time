import { describe, expect, it } from 'vitest'
import { twoSum } from './two-sum'

describe('twoSum', () => {
  it('finds indices of two numbers that add up to target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
  })

  it('works when the answer is not at the start', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
  })

  it('handles duplicate values', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1])
  })

  it('handles negative numbers', () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4])
  })
})
