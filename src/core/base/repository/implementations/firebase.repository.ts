import { EntityModelBase } from 'src/core/base/model/entity.model'
import {
  collection,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  setDoc,
  updateDoc
} from 'firebase/firestore'
import { FindParams, repositoryActionResponse, RepositoryInterface } from 'src/core/base/repository/repository.interface'
import { CollectionReference } from '@firebase/firestore'

export class FirebaseRepository<T extends EntityModelBase> implements RepositoryInterface<T> {
  private readonly collectionName: string
  private readonly database: Firestore
  private readonly collectionRef: CollectionReference

  constructor (collectionName: string, database: Firestore) {
    this.collectionName = collectionName
    this.database = database
    this.collectionRef = collection(this.database, this.collectionName)
  }

  async insert (item: T): Promise<repositoryActionResponse> {
    try {
      await setDoc(doc(this.collectionRef, item.id), { ...item })
      return { success: true }
    } catch (error: unknown) {
      return { success: false, reason: `${error}` }
    }
  }

  async delete (id: string): Promise<repositoryActionResponse> {
    try {
      await deleteDoc(doc(this.collectionRef, id))
      return { success: true }
    } catch (error) {
      return { success: false, reason: `${error}` }
    }
  }

  async findMany (params: FindParams): Promise<T[]> {
    const q = query(this.collectionRef, orderBy(params.orderBy), limit(params.limit)/*, where('capital', '==', true) */)
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

  async update (id: string, item: object): Promise<repositoryActionResponse> {
    try {
      await updateDoc(doc(this.database, this.collectionName, id), item as object)
      return { success: true }
    } catch (error) {
      return { success: false, reason: `${error}` }
    }
  }
}
