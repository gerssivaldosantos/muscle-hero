export class FindParams {
  limit: number
  offset: number
  query?: object

  constructor (params?:Record<string, any>) {
    this.limit = params?.limit || 10
    this.offset = params?.offset || 0
    this.query = params?.query
  }
}

export type requestResult<M> = {
  success: boolean,
  info?: M[],
  message?: string
}

export interface RepositoryInterface <M> {
  insert (item:M): Promise<requestResult<M>>
  findOne (id: string): Promise<requestResult<M>>
  findMany (params: FindParams): Promise<requestResult<M>>
  update (id: string, item:M): Promise<requestResult<M>>
  delete (id: string): Promise<requestResult<M>>
}
