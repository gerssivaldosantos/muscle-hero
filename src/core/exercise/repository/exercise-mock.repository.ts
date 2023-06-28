import { deleteActionResponse, FindParams } from 'src/core/base/repository/repository.interface'
import Exercise from 'src/core/exercise/model/exercise.model'
import ExerciseRepositoryInterface from 'src/core/exercise/repository/exercise.repository.interface'
import { exercisesMock } from 'src/mocks/exercises'

export default class ExerciseMockRepository implements ExerciseRepositoryInterface {
  findMany (params: FindParams): Promise<Exercise[]> {
    const response:Exercise[] = exercisesMock.slice(params.offset, params.limit + params.offset)
    return Promise.resolve(response)
  }

  findOne (id: string): Promise<Exercise | undefined> {
    return Promise.resolve(undefined)
  }

  insert (item: Exercise): Promise<Exercise | undefined> {
    return Promise.resolve(undefined)
  }

  update (id: string, item: Exercise): Promise<boolean> {
    return Promise.resolve(false)
  }

  delete (id: string): Promise<deleteActionResponse> {
    return Promise.resolve({ success: false })
  }
}
