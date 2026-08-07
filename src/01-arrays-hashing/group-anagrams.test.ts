import { describe, expect, it } from 'vitest'
import { groupAnagrams } from './group-anagrams'

function sortGroups(groups: string[][]): string[][] {
  return groups.map((group) => [...group].sort()).sort((a, b) => a[0].localeCompare(b[0]))
}

describe('groupAnagrams', () => {
  it('groups words that are anagrams of each other', () => {
    const result = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])
    expect(sortGroups(result)).toEqual(
      sortGroups([
        ['eat', 'tea', 'ate'],
        ['tan', 'nat'],
        ['bat'],
      ]),
    )
  })

  it('handles an empty string', () => {
    const result = groupAnagrams([''])
    expect(sortGroups(result)).toEqual(sortGroups([['']]))
  })

  it('handles a single word', () => {
    const result = groupAnagrams(['a'])
    expect(sortGroups(result)).toEqual(sortGroups([['a']]))
  })

  it('keeps words with no anagram match in their own group', () => {
    const result = groupAnagrams(['abc', 'def', 'xyz'])
    expect(sortGroups(result)).toEqual(sortGroups([['abc'], ['def'], ['xyz']]))
  })
})
