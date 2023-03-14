import { IsInt, IsPositive, Length, validate } from 'class-validator'

export default class Exercise {
  @Length(1, 50)
    name: string

  @IsInt()
  @IsPositive()
    sets: number

  @IsInt()
  @IsPositive()
    reps: number

  @IsInt()
  @IsPositive()
    restTime: number

  constructor (name: string, sets: number, reps: number, restTime: number) {
    this.name = name
    this.sets = sets
    this.reps = reps
    this.restTime = restTime
  }

  public static async create (data: Record<string, any>): Promise<Exercise> {
    const exercise = new Exercise(data.name, data.sets, data.reps, data.restTime)
    const errors = await validate(exercise)
    if (errors.length > 0) {
      throw new Error(errors.toString())
    }
    return exercise
  }
}
