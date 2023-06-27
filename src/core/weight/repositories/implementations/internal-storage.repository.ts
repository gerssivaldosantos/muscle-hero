import WeightRepositoryInterface from 'src/core/weight/repositories/weight.repository.interface'
import { FindParams, deleteActionResponse } from 'src/core/base/repository.interface'
import { WeightModel } from 'src/core/weight/models/weight.model'

export class WeightInternalStorageRepository implements WeightRepositoryInterface {
  private storageKey = 'weightEntries'

  private getWeightEntries (): WeightModel[] {
    const storedEntries = localStorage.getItem(this.storageKey)
    return storedEntries ? JSON.parse(storedEntries) : []
  }

  private setWeightEntries (entries: WeightModel[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(entries))
  }

  findMany (params: FindParams): Promise<WeightModel[]> {
    const weightEntries = this.getWeightEntries()
    return Promise.resolve(weightEntries)
  }

  findOne (id: string): Promise<WeightModel | undefined> {
    const weightEntries = this.getWeightEntries()
    const weightEntry = weightEntries.find(entry => entry.id === id)
    return Promise.resolve(weightEntry)
  }

  insert (item: WeightModel): Promise<WeightModel | undefined> {
    const weightEntries = this.getWeightEntries()
    const newEntry = { ...item, id: Math.random().toString() } // Generate a unique ID
    weightEntries.push(newEntry)
    this.setWeightEntries(weightEntries)
    return Promise.resolve(newEntry)
  }

  update (id: string, item: WeightModel): Promise<boolean> {
    const weightEntries = this.getWeightEntries()
    const entryIndex = weightEntries.findIndex(entry => entry.id === id)
    if (entryIndex !== -1) {
      weightEntries[entryIndex] = { ...item, id }
      this.setWeightEntries(weightEntries)
      return Promise.resolve(true)
    }
    return Promise.resolve(false)
  }

  delete (id: string): Promise<deleteActionResponse> {
    const weightEntries = this.getWeightEntries()
    const entryIndex = weightEntries.findIndex(entry => entry.id === id)
    if (entryIndex !== -1) {
      weightEntries.splice(entryIndex, 1)
      this.setWeightEntries(weightEntries)
    }
    return Promise.resolve({ success: true })
  }
}
