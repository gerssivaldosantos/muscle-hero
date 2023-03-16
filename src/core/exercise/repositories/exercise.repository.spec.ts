import { describe, expect, it, beforeAll } from 'vitest'
import { FindParams, RepositoryInterface } from 'src/core/base/repository.interface'
import Exercise from 'src/core/exercise/models/exercise.model'
import ExerciseMockRepository from 'src/core/exercise/repositories/exercise-mock.repository'
import { ValidationError } from 'class-validator'

let repository: RepositoryInterface<Exercise>

describe('Exercise Repository Test', () => {
  beforeAll(() => {
    repository = new ExerciseMockRepository()
  })

  describe('FindMany Tests', () => {
    it('Should return success when call without limit and offset', async () => {
      const response: Exercise[] = await repository.findMany(new FindParams())
      expect(response).toHaveLength(10)
      for (const item of response) {
        const created = await Exercise.create(item)
        expect(created).toBeInstanceOf(Exercise)
      }
    })

    it('Should return success when call with limit and without offset', async () => {
      const response: Exercise[] = await repository.findMany(new FindParams({ limit: 20 }))
      expect(response).toHaveLength(20)
      for (const item of response) {
        const created = await Exercise.create(item)
        expect(created).toBeInstanceOf(Exercise)
      }
    })

    it('Should return success when call with offset and without limit', async () => {
      const response: Exercise[] = await repository.findMany(new FindParams({ offset: 20 }))
      expect(response).toHaveLength(10)
      for (const item of response) {
        const created = await Exercise.create(item)
        expect(created).toBeInstanceOf(Exercise)
      }
    })
  })

  describe('FindOne Tests', () => {
    it('Should return success find', async () => {
      const result = repository.findOne('271ed917-58aa-4611-bb3f-52c344668e87')
      expect(result).toBeTruthy()
      const exercise:Exercise | Array<ValidationError> = await Exercise.create(result)
      expect(exercise).toBeInstanceOf(Exercise)
    })

    it('Should return a error with data finded', async () => {
      let result: Exercise | undefined = await repository.findOne('271ed917-58aa-4611-bb3f-52c344668e87')
      expect(result).toBeTruthy()
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      result = { ...result, equipment: 'error' }
      const exercise:Exercise | Array<ValidationError> = await Exercise.create(result)
      expect(exercise).toBeInstanceOf(Array<ValidationError>)
    })

    it('Should not return any data', async () => {
      const result: Exercise | undefined = await repository.findOne('error')
      expect(result).toBeFalsy()
    })
  })
})
