import { FirebaseRepository } from 'src/core/base/repository/implementations/firebase.repository'
import { WeightModel } from 'src/core/weight/domain/model/weight.model'
import { Firestore } from 'firebase/firestore'

export class WeightFirebaseRepository extends FirebaseRepository<WeightModel> {
  constructor (database: Firestore) {
    super('weight', database)
  }
}
