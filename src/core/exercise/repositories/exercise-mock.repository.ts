import { FindParams, requestResult } from 'src/core/base/repository.interface'
import Exercise from 'src/core/exercise/models/exercise.model'
import ExerciseRepositoryInterface from 'src/core/exercise/repositories/exercise.repository.interface'
import { exercisesMock } from 'src/mocks/exercises'
import { ValidationError } from 'class-validator'

export default class ExerciseMockRepository implements ExerciseRepositoryInterface {
  exercises: Exercise[]

  constructor () {
    this.exercises = exercisesMock
  }

  delete (id: string): Promise<requestResult<Exercise>> {
    this.exercises = this.exercises.filter((item: Exercise) => item.id !== id)
    return Promise.resolve({ success: true })
  }

  findMany (params: FindParams): Promise<requestResult<Exercise>> {
    try {
      const response:Exercise[] = this.exercises.slice(params.offset, params.limit + params.offset)
      return Promise.resolve({ success: true, info: response })
    } catch (error:unknown) {
      return Promise.resolve({
        success: false,
        message: `${error}`
      })
    }
  }

  findOne (id: string): Promise<requestResult<Exercise>> {
    const searched = this.exercises.find((item:Exercise) => item.id === id)
    return Promise.resolve({ success: Boolean(searched), info: searched ? [searched] : [] })
  }

  async insert (item: Omit<Exercise, 'id'>): Promise<requestResult<Exercise>> {
    const exercise: Exercise | ValidationError[] = await Exercise.create(item)
    if (exercise instanceof Exercise) return Promise.resolve({ success: true, info: [exercise] })
    else return Promise.resolve({ success: false })
  }

  update (id: string, item: Omit<Exercise, 'id'>): Promise<requestResult<Exercise>> {
    const searched = this.exercises.find((item:Exercise) => item.id === id)
    if (!searched) return Promise.resolve({ success: false })
    Object.keys(item).forEach((key:string) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      searched[key] = item[key]
    })
    return Promise.resolve({ success: true, info: [searched] })
  }
}
