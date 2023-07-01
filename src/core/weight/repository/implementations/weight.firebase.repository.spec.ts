import { beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { createWeight } from 'src/core/weight/dtos/create-weight.dto'
import { faker } from '@faker-js/faker'
import { WeightModel } from 'src/core/weight/model/weight.model'
import { FirebaseRepository } from 'src/core/base/repository/implementations/firebase.repository'
import { FirebaseApp, initializeApp } from 'firebase/app'
import { Firestore, getFirestore } from 'firebase/firestore'
import { WeightFirebaseRepository } from 'src/core/weight/repository/implementations/weight.firebase.repository'
import dotenv from 'dotenv'
import { FindParams } from 'src/core/base/repository/repository.interface'

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
  let fireStore: Firestore
  let actualModel: WeightModel

  beforeAll(() => {
    firebaseApp = initializeApp(clientCredentials)
    fireStore = getFirestore(firebaseApp)
    repository = new WeightFirebaseRepository(fireStore)
  })

  beforeEach(async () => {
    actualModel = new WeightModel(createWeightData())
    await repository.insert(actualModel)
  })

  it('Test default instance is sucessfully created', async () => {
    expect(repository).toBeInstanceOf(FirebaseRepository)
  })

  describe('Insert', () => {
    it('Should insert successfully weight', async () => {
      const modelToInsert = new WeightModel(createWeightData())
      const insertResult = await repository.insert(modelToInsert)
      expect(insertResult.success).toBeTruthy()
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

  describe('Find Many', () => {
    it('Should return data with limit', async () => {
      for (let i = 0; i <= 5; i++) {
        const modelToInsert = new WeightModel(createWeightData())
        await repository.insert(modelToInsert)
      }
      const result = await repository.findMany(new FindParams({ limit: 5 }))
      expect(result).toBeInstanceOf(Array)
      expect(result.length).toEqual(5)
    })
  })

  describe('Update', () => {
    it('Should update data successfully', async () => {
      const resultUpdate = await repository.update(actualModel.id, { value: 99.99 })
      expect(resultUpdate.success).toBeTruthy()
      const findResult = await repository.findOne(actualModel.id)
      expect(findResult).toBeTruthy()
      if (findResult) expect(findResult.value).toEqual(99.99)
    })
  })

  describe('Delete', () => {
    it('Should delete data successfully', async () => {
      const deleteResult = await repository.delete(actualModel.id)
      expect(deleteResult.success).toBeTruthy()
      const findResult = await repository.findOne(actualModel.id)
      expect(findResult).toBeUndefined()
    })
  })
})
