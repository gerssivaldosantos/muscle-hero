import { describe, expect, it } from 'vitest'
import { FindParams, requestResult } from 'src/core/base/repository.interface'
import Exercise from 'src/core/exercise/models/exercise.model'
import { repository } from 'src/core/exercise'

describe('Exercise Repository Test', () => {
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
        for (const key of Object.keys(Exercise)) {
          expect(item).haveOwnProperty(key)
        }
      }
    })
  })

  describe('FindOne Tests', () => {
    it('Should return success find', async () => {
      const result: requestResult<Exercise> = await repository.findOne('271ed917-58aa-4611-bb3f-52c344668e87')
      expect(result.success).toBeTruthy()
      expect(result.info).toHaveLength(1)
      for (const key of Object.keys(Exercise)) {
        expect(result.info ? result.info[0] : undefined).haveOwnProperty(key)
      }
    })

    it('Should not return any data', async () => {
      const result: requestResult<Exercise> = await repository.findOne('error')
      expect(result.success).toBeFalsy()
      expect(result.info).toHaveLength(0)
      expect(result.message).toBeTypeOf('string')
    })
  })

  describe('Insert Tests', () => {
    it('Should insert Exercise successfully', async () => {
      const dataToInsert:Omit<Exercise, 'id'> = Exercise.getRandomData()
      const result: requestResult<Exercise> = await repository.insert(dataToInsert)
      expect(result).toBeInstanceOf(Object)
      expect(result).haveOwnProperty('success')
      expect(result).haveOwnProperty('info')
      expect(result.info).toHaveLength(1)
      for (const key of Object.keys(Exercise)) {
        expect(result.info ? result.info[0] : undefined).haveOwnProperty(key)
      }
    })

    it('Should insert Exercise unsuccessfully', async () => {
      // Lembrar de criar uma interface para a lib de request (desacoplar ela)
      // ai no teste, mockar ela invés do repository !!
    })
  })
})
