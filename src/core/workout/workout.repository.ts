import { deleteActionResponse, FindParams, RepositoryInterface } from 'src/core/base/repository.interface'
import Workout from 'src/core/workout/models/workout.model'

export class WorkoutRepository implements RepositoryInterface<Workout> {
  delete (id: string): Promise<deleteActionResponse> {
    return Promise.resolve({ success: true })
  }

  findMany (params: FindParams): Promise<Workout[]> {
    return Promise.resolve([])
  }

  findOne (id: string): Promise<Workout | undefined> {
    return Promise.resolve(undefined)
  }

  insert (item: Workout): Promise<Workout | undefined> {
    return Promise.resolve(undefined)
  }

  update (id: string, item: Workout): Promise<boolean> {
    return Promise.resolve(false)
  }
}
