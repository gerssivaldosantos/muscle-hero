import { db } from 'src/boot/firebaseConfig'
import { deleteActionResponse, FindParams, RepositoryInterface } from 'src/core/base/repository.interface'
import firebase from 'firebase/compat/app'

export class FirebaseRepository<T> implements RepositoryInterface<T> {
  private readonly collectionName: string

  constructor (collectionName: string) {
    this.collectionName = collectionName
  }

  async insert (item: T): Promise<T | undefined> {
    try {
      debugger
      const docRef = await db.collection(this.collectionName).add({ ...item } as firebase.firestore.DocumentData)
      const doc = await docRef.get()
      return doc.exists ? doc.data() as T : undefined
    } catch (error) {
      console.error('Error inserting item:', error)
      return undefined
    }
  }

  async findOne (id: string): Promise<T | undefined> {
    try {
      debugger
      const docRef = await db.collection(this.collectionName).doc(id).get()
      return docRef.exists ? docRef.data() as T : undefined
    } catch (error) {
      console.error('Error retrieving item:', error)
      debugger
      return undefined
    }
  }

  async findMany (params: FindParams): Promise<T[]> {
    try {
      let query = db.collection(this.collectionName)
      if (params.query) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        query = query.where(params.query.field, params.query.operator, params.query.value)
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      query = query.limit(params.limit).offset(params.offset)
      const snapshot = await query.get()
      const items: T[] = []
      snapshot.forEach(doc => {
        if (doc.exists) {
          items.push(doc.data() as T)
        }
      })
      return items
    } catch (error) {
      console.error('Error retrieving items:', error)
      return []
    }
  }

  async update (id: string, item: T): Promise<boolean> {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await db.collection(this.collectionName).doc(id).update(item)
      return true
    } catch (error) {
      console.error('Error updating item:', error)
      return false
    }
  }

  async delete (id: string): Promise<deleteActionResponse> {
    try {
      await db.collection(this.collectionName).doc(id).delete()
      return { success: true }
    } catch (error) {
      console.error('Error deleting item:', error)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return { success: false, reason: error.message }
    }
  }
}
