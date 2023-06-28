import { FirebaseRepository } from 'src/core/base/repository/implementations/firebase.repository'
import { WeightModel } from 'src/core/weight/model/weight.model'

export class WeightFirebaseRepository extends FirebaseRepository<WeightModel> {
  constructor () {
    super('weight')
  }
}
