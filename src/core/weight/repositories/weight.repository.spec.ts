import { describe, it, expect, beforeEach } from 'vitest'
import { weightRepositoryInstance } from 'src/core/weight/repositories/index'
import { createWeight } from 'src/core/weight/dtos/create-weight.dto'
import { faker } from '@faker-js/faker'
import { WeightModel } from 'src/core/weight/models/weight.model'
import { FirebaseRepository } from 'src/core/base/firebase.repository'
const createWeightData = ():createWeight => {
  return {
    createdAt: faker.date.past(),
    value: faker.number.float({ min: 20, max: 150 })
  }
}

describe('Repository Tests', () => {
  let actualModel: WeightModel
  it('Test default instance is sucessfully created', async () => {
    expect(weightRepositoryInstance).toBeInstanceOf(FirebaseRepository)
  })

  beforeEach(async () => {
    actualModel = new WeightModel(createWeightData())
    await weightRepositoryInstance.insert(actualModel)
  })
})
