import { describe, expect, it } from 'vitest'
import { createWeight } from 'src/core/weight/application/dto/create-weight.dto'
import { faker } from '@faker-js/faker'
import { WeightModel } from 'src/core/weight/domain/model/weight.model'

describe('Weight Model Test', () => {
  it('Should return an instance of WeightModel', async () => {
    const dataToCreate: createWeight = {
      value: faker.number.float({ min: 15, max: 300 }),
      createdAt: faker.date.past()
    }
    const model: WeightModel = new WeightModel(dataToCreate)
    expect(model).toBeInstanceOf(WeightModel)
  })
})
