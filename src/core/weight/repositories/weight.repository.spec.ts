import { describe, it, expect } from 'vitest'
import { weightRepositoryInstance } from 'src/core/weight/repositories/index'
import {
  WeightInternalStorageRepository
} from 'src/core/weight/repositories/implementations/internal-storage.repository'

describe('Repository Tests', () => {
  it('Test default instance is sucessfully created', async () => {
    expect(weightRepositoryInstance).toBeInstanceOf(WeightInternalStorageRepository)
  })
})
