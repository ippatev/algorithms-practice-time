import { describe, expect, it } from 'vitest'
import { dailyTemperatures } from './daily-temperatures'

describe('dailyTemperatures', () => {
  it('finds days to wait for a warmer temperature in a typical case', () => {
    expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([1, 1, 4, 2, 1, 1, 0, 0])
  })

  it('handles strictly increasing temperatures', () => {
    expect(dailyTemperatures([30, 40, 50, 60])).toEqual([1, 1, 1, 0])
  })

  it('handles strictly decreasing temperatures', () => {
    expect(dailyTemperatures([90, 60, 30])).toEqual([0, 0, 0])
  })

  it('handles a single day', () => {
    expect(dailyTemperatures([50])).toEqual([0])
  })
})
