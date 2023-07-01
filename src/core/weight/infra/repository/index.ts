import { WeightFirebaseRepository } from 'src/core/weight/infra/repository/implementation/weight.firebase.repository'
import { db } from 'boot/firebase-config'

export const weightRepositoryInstance = new WeightFirebaseRepository(db)
