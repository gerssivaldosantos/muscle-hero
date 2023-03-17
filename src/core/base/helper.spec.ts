import { describe, expect, it } from 'vitest'
import { getRandomFromEnum } from 'src/core/base/helpers'

enum testEnum {
  'test1' = 0,
  'test2' = 1
}

describe('Helper Tests', () => {
  it('getRandomFromEnum', () => {
    const result = getRandomFromEnum(testEnum)
    expect(Object.values(testEnum)).toContainEqual(result)
  })
})
