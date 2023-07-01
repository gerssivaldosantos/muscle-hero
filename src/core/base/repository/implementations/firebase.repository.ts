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

/**
 * A repository implementation for Firebase Firestore.
 *
 * @template T - The type of the entity model.
 */
export class FirebaseRepository<T extends EntityModelBase> implements RepositoryInterface<T> {
  /**
   * The name of the collection in Firestore.
   * @private
   */
  private readonly collectionName: string

  /**
   * The Firestore database instance.
   * @private
   */
  private readonly database: Firestore

  /**
   * The reference to the collection in Firestore.
   * @private
   */
  private readonly collectionRef: CollectionReference

  /**
   * Creates an instance of FirebaseRepository.
   *
   * @param {string} collectionName - The name of the collection in Firestore.
   * @param {Firestore} database - The Firestore database instance.
   */
  constructor (collectionName: string, database: Firestore) {
    this.collectionName = collectionName
    this.database = database
    this.collectionRef = collection(this.database, this.collectionName)
  }

  /**
   * Inserts an item into the Firestore collection.
   *
   * @param {T} item - The item to be inserted.
   * @returns {Promise<repositoryActionResponse>} - A promise that resolves to an object containing information about the insert action.
   */
  async insert (item: T): Promise<repositoryActionResponse> {
    try {
      await setDoc(doc(this.collectionRef, item.id), { ...item })
      return { success: true }
    } catch (error: unknown) {
      return { success: false, reason: `${error}` }
    }
  }

  /**
   * Deletes an item from the Firestore collection based on ID.
   *
   * @param {string} id - The ID of the item to be deleted.
   * @returns {Promise<repositoryActionResponse>} - A promise that resolves to an object containing information about the delete action.
   */
  async delete (id: string): Promise<repositoryActionResponse> {
    try {
      await deleteDoc(doc(this.collectionRef, id))
      return { success: true }
    } catch (error) {
      return { success: false, reason: `${error}` }
    }
  }

  /**
   * Retrieves multiple items from the Firestore collection based on query parameters.
   *
   * @param {FindParams} params - The query parameters.
   * @returns {Promise<T[]>} - A promise that resolves to an array of retrieved items.
   */
  async findMany (params: FindParams): Promise<T[]> {
    const q = query(this.collectionRef, orderBy(params.orderBy), limit(params.limit)/*, where('capital', '==', true) */)
    const querySnapshot = await getDocs(q)
    const result = querySnapshot.docs.map((item) => item.data()) as T[]
    return Promise.resolve(result)
  }

  /**
   * Retrieves a single item from the Firestore collection based on ID.
   *
   * @param {string} id - The ID of the item to be retrieved.
   * @returns {Promise<T | undefined>} - A promise that resolves to the retrieved item, or undefined if not found.
   */
  async findOne (id: string): Promise<T | undefined> {
    const docRef = doc(this.database, this.collectionName, id)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      return docSnap.data() as T
    } else {
      return Promise.resolve(undefined)
    }
  }

  /**
   * Updates an item in the Firestore collection based on ID.
   *
   * @param {string} id - The ID of the item to be updated.
   * @param {object} item - The updated item.
   * @returns {Promise<repositoryActionResponse>} - A promise that resolves to an object containing information about the update action.
   */
  async update (id: string, item: object): Promise<repositoryActionResponse> {
    try {
      await updateDoc(doc(this.database, this.collectionName, id), item as object)
      return { success: true }
    } catch (error) {
      return { success: false, reason: `${error}` }
    }
  }
}
