import { describe, it, expect, beforeEach } from 'vitest'
import { weightRepositoryInstance } from 'src/core/weight/repositories/index'
import {
  WeightInternalStorageRepository
} from 'src/core/weight/repositories/implementations/internal-storage.repository'
import { createWeight } from 'src/core/weight/dtos/create-weight.dto'
import { faker } from '@faker-js/faker'
import { WeightModel } from 'src/core/weight/models/weight.model'

const createWeightData = ():createWeight => {
  return {
    createdAt: faker.date.past(),
    value: faker.number.float({ min: 20, max: 150 })
  }
}

describe('Repository Tests', () => {
  let actualModel: WeightModel
  it('Test default instance is sucessfully created', async () => {
    expect(weightRepositoryInstance).toBeInstanceOf(WeightInternalStorageRepository)
  })

  beforeEach(async () => {
    localStorage.clear()
    actualModel = new WeightModel(createWeightData())
    await weightRepositoryInstance.insert(actualModel)
  })
})
