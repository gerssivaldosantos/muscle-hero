import { IsDate, IsNumber } from 'class-validator'
import { createWeight } from 'src/core/weight/dtos/create-weight.dto'

export class WeightModel {
  @IsNumber()
    value: number

  @IsDate()
    createdAt: Date

  constructor (data: createWeight) {
    this.value = data.value
    this.createdAt = data.createdAt
  }
}
