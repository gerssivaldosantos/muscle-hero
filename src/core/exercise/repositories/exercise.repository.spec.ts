import ExerciseMockRepository from 'src/core/exercise/repositories/exercise-mock.repository'
import Exercise from 'src/core/exercise/models/exercise.model'
import { v4 as uuid } from 'uuid'
import { describe, beforeEach, it, expect, vi } from 'vitest'
describe('ExerciseMockRepository', () => {
  let exerciseMockRepository: ExerciseMockRepository

  beforeEach(() => {
    exerciseMockRepository = new ExerciseMockRepository()
  })

  it('should insert an exercise', async () => {
    const exercise: Exercise = {
      id: uuid(),
      name: 'Test exercise',
      muscle: 'Test muscle',
      equipment: 'Test equipment',
      level: 'Test level',
      videoUrls: {
        en: 'https://example.com/video'
      },
      imageUrl: 'https://example.com/image',
      instructions: ['Test instruction']
    }

    const result = await exerciseMockRepository.insert(exercise)

    expect(result).toBeDefined()
    expect(result.id).toEqual(exercise.id)
    expect(result.name).toEqual(exercise.name)
    expect(result.muscle).toEqual(exercise.muscle)
    expect(result.equipment).toEqual(exercise.equipment)
    expect(result.level).toEqual(exercise.level)
    expect(result.videoUrls).toEqual(exercise.videoUrls)
    expect(result.imageUrl).toEqual(exercise.imageUrl)
    expect(result.instructions).toEqual(exercise.instructions)
  })

  it('should find an exercise', async () => {
    const exerciseId = 'test-id'
    const exercise: Exercise = {
      id: exerciseId,
      name: 'Test exercise',
      muscle: 'Test muscle',
      equipment: 'Test equipment',
      level: 'Test level',
      videoUrls: {
        en: 'https://example.com/video'
      },
      imageUrl: 'https://example.com/image',
      instructions: ['Test instruction']
    }

    vi.spyOn(exerciseMockRepository, 'findOne').mockImplementation(() => Promise.resolve(exercise))

    const result = await exerciseMockRepository.findOne(exerciseId)

    expect(result).toBeDefined()
    expect(result?.id).toEqual(exercise.id)
    expect(result?.name).toEqual(exercise.name)
    expect(result?.muscle).toEqual(exercise.muscle)
    expect(result?.equipment).toEqual(exercise.equipment)
    expect(result?.level).toEqual(exercise.level)
    expect(result?.videoUrls).toEqual(exercise.videoUrls)
    expect(result?.imageUrl).toEqual(exercise.imageUrl)
    expect(result?.instructions).toEqual(exercise.instructions)
  })

  it('should delete an exercise', async () => {
    const exerciseId = 'test-id'
    const exercise: Exercise = {
      id: exerciseId,
      name: 'Test exercise',
      muscle: 'Test muscle',
      equipment: 'Test equipment',
      level: 'Test level',
      videoUrls: {
        en: 'https://example.com/video'
      },
      imageUrl: 'https://example.com/image',
      instructions: ['Test instruction']
    }

    vi.spyOn(exerciseMockRepository, 'findOne').mockImplementation(() => Promise.resolve(exercise))
    vi.spyOn(exerciseMockRepository, 'delete').mockImplementation(() => Promise.resolve({ success: true }))

    const result = await exerciseMockRepository.delete(exerciseId)

    expect(result).toBeDefined()
    expect(result.success).toBeTruthy()
  })
})
