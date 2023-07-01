import { WeightFirebaseRepository } from 'src/core/weight/repository/implementations/weight.firebase.repository'
import { db } from 'src/boot/firebase-config'

export const weightRepositoryInstance = new WeightFirebaseRepository(db)
