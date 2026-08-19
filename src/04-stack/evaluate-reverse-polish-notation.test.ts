import { describe, expect, it } from 'vitest'
import { evalRPN } from './evaluate-reverse-polish-notation'

describe('evalRPN', () => {
  it('evaluates a simple expression', () => {
    expect(evalRPN(['2', '1', '+', '3', '*'])).toBe(9)
  })

  it('evaluates an expression with division', () => {
    expect(evalRPN(['4', '13', '5', '/', '+'])).toBe(6)
  })

  it('evaluates a longer expression with mixed operators', () => {
    expect(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])).toBe(22)
  })

  it('truncates division toward zero for negative results', () => {
    expect(evalRPN(['4', '3', '-', '10', '*', '6', '/'])).toBe(1)
  })

  it('handles a single number', () => {
    expect(evalRPN(['42'])).toBe(42)
  })
})
