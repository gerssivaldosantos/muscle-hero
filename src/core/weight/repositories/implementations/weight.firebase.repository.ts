import { FirebaseRepository } from 'src/core/base/firebase.repository'
import { WeightModel } from 'src/core/weight/models/weight.model'

export class WeightFirebaseRepository extends FirebaseRepository<WeightModel> {
  constructor () {
    super('weight')
  }
}
