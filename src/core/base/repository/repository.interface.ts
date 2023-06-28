export class FindParams {
  limit?: number
  offset?: number
  query?: Record<string, any>

  constructor (params?: FindParams) {
    this.limit = params?.limit || 10
    this.offset = params?.offset || 0
    this.query = params?.query
  }
}

export type deleteActionResponse = {
  success: boolean,
  reason?: string
}

export interface RepositoryInterface<T> {
  insert(item: T): Promise<T | undefined>

  findOne(id: string): Promise<T | undefined>

  findMany(params: FindParams): Promise<T[]>

  update(id: string, item: T): Promise<boolean>

  delete(id: string): Promise<deleteActionResponse>
}
