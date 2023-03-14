import { Length, validate, IsArray, ArrayMinSize, IsInstance } from 'class-validator'
import Exercise from 'src/core/exercise/models/exercise.model'

export default class Workout {
  @Length(1, 50)
    name: string

  @IsArray()
  @ArrayMinSize(1)
  @IsInstance(Exercise, { each: true })
    exercises: Exercise[]

  constructor (name: string, exercises: Exercise[]) {
    this.name = name
    this.exercises = exercises
  }

  public static async create (data: Record<string, any>): Promise<Workout> {
    const exercises = data.exercises.map((exercise: Record<string, any>) =>
      Exercise.create(exercise)
    )

    const workout = new Workout(data.name, exercises)
    const errors = await validate(workout)
    if (errors.length > 0) {
      throw new Error(errors.toString())
    }
    return workout
  }
}
