import { beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { createWeight } from 'src/core/weight/dtos/create-weight.dto'
import { faker } from '@faker-js/faker'
import { WeightModel } from 'src/core/weight/model/weight.model'
import { FirebaseRepository } from 'src/core/base/repository/implementations/firebase.repository'
import { FirebaseApp, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { WeightFirebaseRepository } from 'src/core/weight/repository/implementations/weight.firebase.repository'
import dotenv from 'dotenv'
dotenv.config()

const clientCredentials = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
}

const createWeightData = (): createWeight => {
  return {
    createdAt: faker.date.past(),
    value: faker.number.float({ min: 20, max: 150 })
  }
}

describe('Repository Tests', () => {
  let firebaseApp: FirebaseApp
  let repository: WeightFirebaseRepository
  let actualModel: WeightModel
  it('Test default instance is sucessfully created', async () => {
    expect(repository).toBeInstanceOf(FirebaseRepository)
  })

  beforeAll(() => {
    firebaseApp = initializeApp(clientCredentials)
    repository = new WeightFirebaseRepository(getFirestore(firebaseApp))
  })

  beforeEach(async () => {
    actualModel = new WeightModel(createWeightData())
    await repository.insert(actualModel)
  })

  describe('Insert', () => {
    it('Should insert successfully weight', async () => {
      const modelToInsert = new WeightModel(createWeightData())
      const insertResult = await repository.insert(modelToInsert)
      expect(insertResult).toBeTruthy()
      const findResult = await repository.findOne(modelToInsert.id)
      expect(findResult).toBeTruthy()
    })
  })

  describe('FindOne', () => {
    it('Should find successfully weight by id', async () => {
      const result = await repository.findOne(actualModel.id)
      expect(result).toBeTruthy()
    })
  })
})
