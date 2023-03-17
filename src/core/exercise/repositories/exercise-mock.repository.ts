import { FindParams, requestResult } from 'src/core/base/repository.interface'
import Exercise from 'src/core/exercise/models/exercise.model'
import ExerciseRepositoryInterface from 'src/core/exercise/repositories/exercise.repository.interface'
import { exercisesMock } from 'src/mocks/exercises'

export default class ExerciseMockRepository implements ExerciseRepositoryInterface {
  delete (id: string): Promise<requestResult<Exercise>> {
    return Promise.resolve({ success: false })
  }

  findMany (params: FindParams): Promise<requestResult<Exercise>> {
    try {
      const response:Exercise[] = exercisesMock.slice(params.offset, params.limit + params.offset)
      return Promise.resolve({ success: true, info: response })
    } catch (error:any) {
      return Promise.resolve({
        success: false,
        message: `${error.message || error}`
      })
    }
  }

  findOne (id: string): Promise<requestResult<Exercise>> {
    return Promise.resolve({ success: false })
  }

  insert (item: Exercise): Promise<requestResult<Exercise>> {
    return Promise.resolve({ success: false })
  }

  update (id: string, item: Exercise): Promise<requestResult<Exercise>> {
    return Promise.resolve({ success: false })
  }
}
