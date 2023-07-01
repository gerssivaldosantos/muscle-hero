import { EntityModelBase } from 'src/core/base/model/entity.model'
import { collection, doc, getDocs, query, setDoc, getDoc, Firestore } from 'firebase/firestore'
import { deleteActionResponse, FindParams, RepositoryInterface } from 'src/core/base/repository/repository.interface'

export class FirebaseRepository<T extends EntityModelBase> implements RepositoryInterface<T> {
  private readonly collectionName: string
  private readonly database: Firestore

  constructor (collectionName: string, database: Firestore) {
    this.collectionName = collectionName
    this.database = database
  }

  async insert (item: T): Promise<T | undefined> {
    try {
      const collectionRef = collection(this.database, this.collectionName)
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
    const q = query(collection(this.database, this.collectionName)/*, where('capital', '==', true) */)
    const querySnapshot = await getDocs(q)
    const result = querySnapshot.docs.map((item) => item.data()) as T[]
    return Promise.resolve(result)
  }

  async findOne (id: string): Promise<T | undefined> {
    const docRef = doc(this.database, this.collectionName, id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return docSnap.data() as T
    } else {
      return Promise.resolve(undefined)
    }
  }

  update (id: string, item: T): Promise<boolean> {
    return Promise.resolve(false)
  }
}
