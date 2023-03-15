import { Length, validate, IsArray, ArrayMinSize, IsInstance, IsString } from 'class-validator'
import Exercise from 'src/core/exercise/models/exercise.model'
import { v4 as uuid } from 'uuid'

export default class Workout {
  @IsString()
    id?: string

  @Length(1, 50)
    name: string

  @IsArray()
  @ArrayMinSize(1)
  @IsInstance(Exercise, { each: true })
    exercises: Exercise[]

  constructor (id: string | undefined, name: string, exercises: Exercise[]) {
    this.id = id || uuid()
    this.name = name
    this.exercises = exercises
  }

  public static async create (data: Record<string, any>): Promise<Workout> {
    const exercises = data.exercises.map((exercise: Record<string, never>) =>
      Exercise.create(exercise)
    )

    const workout = new Workout(data.id, data.name, exercises)
    const errors = await validate(workout)
    if (errors.length > 0) {
      throw new Error(errors.toString())
    }
    return workout
  }
}
