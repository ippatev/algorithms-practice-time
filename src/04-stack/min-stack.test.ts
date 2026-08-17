import { describe, expect, it } from 'vitest'
import { MinStack } from './min-stack'

describe('MinStack', () => {
  it('tracks the minimum as values are pushed and popped', () => {
    const stack = new MinStack()

    stack.push(-2)
    stack.push(0)
    stack.push(-3)
    expect(stack.getMin()).toBe(-3)

    stack.pop()
    expect(stack.top()).toBe(0)
    expect(stack.getMin()).toBe(-2)
  })

  it('updates the minimum correctly when a new lowest value is pushed later', () => {
    const stack = new MinStack()

    stack.push(5)
    stack.push(3)
    expect(stack.getMin()).toBe(3)

    stack.push(1)
    expect(stack.getMin()).toBe(1)

    stack.pop()
    expect(stack.getMin()).toBe(3)
  })

  it('handles duplicate minimum values correctly on pop', () => {
    const stack = new MinStack()

    stack.push(2)
    stack.push(2)
    stack.push(3)
    expect(stack.getMin()).toBe(2)

    stack.pop()
    expect(stack.getMin()).toBe(2)

    stack.pop()
    expect(stack.getMin()).toBe(2)
  })
})
