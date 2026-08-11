import { describe, expect, it } from 'vitest'
import { maxProfit } from './best-time-to-buy-and-sell-stock'

describe('maxProfit', () => {
  it('finds the max profit for a typical case', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5)
  })

  it('returns 0 when prices only decrease', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
  })

  it('handles a single price', () => {
    expect(maxProfit([5])).toBe(0)
  })

  it('handles the minimum appearing after the maximum first', () => {
    expect(maxProfit([2, 4, 1])).toBe(2)
  })
})
