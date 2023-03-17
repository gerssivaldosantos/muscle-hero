import { describe, expect, it, beforeAll } from 'vitest'
import { FindParams, requestResult } from 'src/core/base/repository.interface'
import Exercise from 'src/core/exercise/models/exercise.model'
import ExerciseMockRepository from 'src/core/exercise/repositories/exercise-mock.repository'

let repository: ExerciseMockRepository

describe('Exercise Repository Test', () => {
  beforeAll(() => {
    repository = new ExerciseMockRepository()
  })

  describe('FindMany Tests', () => {
    it('Should return success when call without limit and offset', async () => {
      const response:requestResult<Exercise> = await repository.findMany(new FindParams())
      expect(response.info).toHaveLength(10)
      for (const item of Array.isArray(response.info) ? response.info : []) {
        const created = await Exercise.create(item)
        expect(created).toBeInstanceOf(Exercise)
      }
    })

    it('Should return success when call with limit and without offset', async () => {
      const response: requestResult<Exercise> = await repository.findMany(new FindParams({ limit: 20 }))
      expect(response.info).toHaveLength(20)
      for (const item of Array.isArray(response.info) ? response.info : []) {
        const created = await Exercise.create(item)
        expect(created).toBeInstanceOf(Exercise)
      }
    })

    it('Should return success when call with offset and without limit', async () => {
      const response: requestResult<Exercise> = await repository.findMany(new FindParams({ offset: 20 }))
      expect(response.info).toHaveLength(10)
      for (const item of Array.isArray(response.info) ? response.info : []) {
        const created = await Exercise.create(item)
        expect(created).toBeInstanceOf(Exercise)
      }
    })
  })

  describe('FindOne Tests', () => {
    it('Should return success find', async () => {
      const result: requestResult<Exercise> = await repository.findOne('271ed917-58aa-4611-bb3f-52c344668e87')
      expect(result.success).toBeTruthy()
      expect(result.info).toHaveLength(1)
      expect(result.info ? result.info[0] : undefined).toBeInstanceOf(Exercise)
    })

    it('Should not return any data', async () => {
      const result: requestResult<Exercise> = await repository.findOne('error')
      expect(result.success).toBeFalsy()
      expect(result.info).toHaveLength(0)
      expect(result.message).toBeTypeOf('string')
    })
  })/*

  describe('Insert Tests', () => {
    it('Should insert a new exercise successfully', async () => {
      const newExercise = new Exercise({
        title: 'New Exercise',
        description: 'This is a new exercise'
      })
      const response: requestResult<Exercise> = await repository.insert(newExercise)
      expect(response.success).toBeTruthy()
      expect(response.info).toBeInstanceOf(Exercise)
      expect(response.info?.title).toEqual('New Exercise')
      expect(response.info?.description).toEqual('This is a new exercise')
    })
  })

  describe('Update Tests', () => {
    it('Should update an existing exercise successfully', async () => {
      const updatedExercise = new Exercise({
        id: '271ed917-58aa-4611-bb3f-52c344668e87',
        title: 'Updated Exercise',
        description: 'This is an updated exercise'
      })
      const response: requestResult<Exercise> = await repository.update(updatedExercise.id, updatedExercise)
      expect(response.success).toBeTruthy()
      expect(response.info).toBeInstanceOf(Exercise)
      expect(response.info?.title).toEqual('Updated Exercise')
      expect(response.info?.description).toEqual('This is an updated exercise')
    })

    it('Should fail to update a non-existent exercise', async () => {
      const updatedExercise = new Exercise({
        id: 'non-existent-id',
        title: 'Updated Exercise',
        description: 'This is an updated exercise'
      })
      const response: requestResult<Exercise> = await repository.update(updatedExercise.id, updatedExercise)
      expect(response.success).toBeFalsy()
      expect(response.info).toBeNull()
      expect(response.message).toBe('Exercise not found')
    })
  })

  describe('Delete Tests', () => {
    it('Should delete an existing exercise successfully', async () => {
      const response: requestResult<Exercise> = await repository.delete('271ed917-58aa-4611-bb3f-52c344668e87')
      expect(response.success).toBeTruthy()
      expect(response.info).toBeInstanceOf(Exercise)
      expect(response.info?.id).toEqual('271ed917-58aa-4611-bb3f-52c344668e87')
    })

    it('Should fail to delete a non-existent exercise', async () => {
      const response: requestResult<Exercise> = await repository.delete('non-existent-id')
      expect(response.success).toBeFalsy()
      expect(response.info).toBeNull()
      expect(response.message).toBe('Exercise not found')
    })
  }) */
})
