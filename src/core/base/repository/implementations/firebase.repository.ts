import { EntityModelBase } from 'src/core/base/model/entity.model'
import { db } from 'boot/firebase-config'
import { collection, doc, getDocs, query, setDoc } from 'firebase/firestore'
import { deleteActionResponse, FindParams, RepositoryInterface } from 'src/core/base/repository/repository.interface'

export class FirebaseRepository<T extends EntityModelBase> implements RepositoryInterface<T> {
  private readonly collectionName: string

  constructor (collectionName: string) {
    this.collectionName = collectionName
  }

  async insert (item: T): Promise<T | undefined> {
    try {
      const collectionRef = collection(db, this.collectionName)
      await setDoc(doc(collectionRef, item.id), { ...item })
      return item
    } catch (error) {
      console.error('Erro ao inserir item:', error)
      return undefined
    }
  }

  delete (id: string): Promise<deleteActionResponse> {
    return Promise.resolve({ success: false })
  }

  async findMany (params: FindParams): Promise<T[]> {
    const q = query(collection(db, this.collectionName)/*, where('capital', '==', true) */)
    const querySnapshot = await getDocs(q)
    const result = querySnapshot.docs.map((item) => item.data()) as T[]
    return Promise.resolve(result)
  }

  findOne (id: string): Promise<T | undefined> {
    return Promise.resolve(undefined)
  }

  update (id: string, item: T): Promise<boolean> {
    return Promise.resolve(false)
  }
}
