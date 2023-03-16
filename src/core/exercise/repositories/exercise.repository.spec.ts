import { describe, expect, it, beforeAll } from 'vitest'
import { FindParams, RepositoryInterface } from 'src/core/base/repository.interface'
import Exercise from 'src/core/exercise/models/exercise.model'
import ExerciseMockRepository from 'src/core/exercise/repositories/exercise-mock.repository'

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
})
