
type findParamsConstrutorParams = {
  limit?: number
  offset?: number
  query?: Record<string, any>
  orderBy?: string
}
export class FindParams {
  private _limit: number
  private _offset: number
  private _query: Record<string, any>
  private _orderBy: string

  get orderBy (): string {
    return this._orderBy
  }

  set orderBy (value: string) {
    this._orderBy = value
  }

  get query (): Record<string, any> {
    return this._query
  }

  set query (value: Record<string, any>) {
    this._query = value
  }

  get offset (): number {
    return this._offset
  }

  set offset (value: number) {
    this._offset = value
  }

  get limit (): number {
    return this._limit
  }

  set limit (value: number) {
    this._limit = value
  }

  constructor (params?: findParamsConstrutorParams) {
    this.limit = params?.limit || 10
    this.offset = params?.offset || 0
    this.query = params?.query || {}
    this.orderBy = params?.orderBy || 'id'
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
