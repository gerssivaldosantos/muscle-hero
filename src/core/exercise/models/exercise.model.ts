import { IsInt, IsPositive, IsString, Length, validate } from 'class-validator'
import { v4 as uuid } from 'uuid'

export default class Exercise {
  @IsString()
    id?: string

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

  constructor (id: string | undefined, name: string, sets: number, reps: number, restTime: number) {
    this.id = id || uuid()
    this.name = name
    this.sets = sets
    this.reps = reps
    this.restTime = restTime
  }

  public static async create (data: Record<string, never>): Promise<Exercise> {
    const exercise = new Exercise(data.id, data.name, data.sets, data.reps, data.restTime)
    const errors = await validate(exercise)
    if (errors.length > 0) {
      throw new Error(errors.toString())
    }
    return exercise
  }
}
