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

export type repositoryActionResponse = {
  success: boolean,
  reason?: string,
  data?: unknown
}

export interface RepositoryInterface<T> {
  insert(item: T): Promise<repositoryActionResponse>

  findOne(id: string): Promise<T | undefined>

  findMany(params: FindParams): Promise<T[]>

  update(id: string, item: T): Promise<repositoryActionResponse>

  delete(id: string): Promise<repositoryActionResponse>
}
