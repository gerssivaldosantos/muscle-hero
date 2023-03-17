import { describe, expect, it } from 'vitest'
import Exercise from 'src/core/exercise/models/exercise.model'
import { ValidationError } from 'class-validator'

describe('Exercise Model Test', () => {
  it('Should create a Exercise model with success', async () => {
    const dataToInsert = Exercise.getRandomData()
    const entity = await Exercise.create(dataToInsert)
    expect(entity).toBeInstanceOf(Exercise)
  })

  it('Should return array of errors from entity validation when create', async () => {
    const dataToInsert = Exercise.getRandomData()
    const entity: Exercise | ValidationError[] = await Exercise.create({ ...dataToInsert, equipment: 'Error' })
    expect(entity).toBeInstanceOf(Array)
    for (const error of Array.isArray(entity) ? entity : []) {
      expect(error).toBeInstanceOf(ValidationError)
    }
  })
})
