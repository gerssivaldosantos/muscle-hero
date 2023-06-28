import { db } from 'src/boot/firebase-config'
import { describe, it } from 'vitest'
import { collection, getDocs } from 'firebase/firestore'

describe('Firebase Config Test', () => {
  it('Setup Test', async () => {
    const weightRef = collection(db, 'weight')
    const data = await getDocs(weightRef)
    data.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data())
    })
  })
})
