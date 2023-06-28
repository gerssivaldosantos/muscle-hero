import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc
} from 'firebase/firestore'
import {
  FindParams,
  deleteActionResponse,
  RepositoryInterface
} from 'src/core/base/repository/repository.interface'

// Inicializar o app do Firebase
const firebaseConfig = {
  // Sua configuração do Firebase aqui
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// Implementar o repositório
export class FirebaseRepository<T> implements RepositoryInterface<T> {
  private readonly collectionName: string

  constructor (collectionName: string) {
    this.collectionName = collectionName
  }

  async insert (item: T): Promise<T | undefined> {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const docRef = await addDoc(collection(db, this.collectionName), item)
      const newItem = await getDoc(docRef)
      return newItem.data() as T
    } catch (error) {
      console.error('Erro ao inserir item:', error)
      return undefined
    }
  }

  async findOne (id: string): Promise<T | undefined> {
    try {
      const docRef = doc(db, this.collectionName, id)
      const item = await getDoc(docRef)
      return item.data() as T
    } catch (error) {
      console.error('Erro ao obter item:', error)
      return undefined
    }
  }

  async findMany (params: FindParams): Promise<T[]> {
    try {
      const { limit, offset, query } = params
      let queryRef = collection(db, this.collectionName)

      // Aplicar filtros de consulta, se houver
      if (query) {
        for (const key in query) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          queryRef = queryRef.where(key, '==', query[key])
        }
      }

      // Definir limite e offset
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      queryRef = queryRef.limit(limit).offset(offset)

      const querySnapshot = await getDocs(queryRef)
      const items: T[] = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data() as T)
      })

      return items
    } catch (error) {
      console.error('Erro ao obter itens:', error)
      return []
    }
  }

  async update (id: string, item: T): Promise<boolean> {
    try {
      const docRef = doc(db, this.collectionName, id)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await updateDoc(docRef, item)
      return true
    } catch (error) {
      console.error('Erro ao atualizar item:', error)
      return false
    }
  }

  async delete (id: string): Promise<deleteActionResponse> {
    try {
      const docRef = doc(db, this.collectionName, id)
      await deleteDoc(docRef)
      return { success: true }
    } catch (error) {
      console.error('Erro ao excluir item:', error)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return { success: false, reason: error.message }
    }
  }
}
