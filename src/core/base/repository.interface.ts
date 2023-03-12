type findParams = {
  limit: number,
  offset: number,
  query?: object
}

type deleteActionResponse = {
  success: boolean,
  reason?: string
}

export interface RepositoryInterface <T> {
  insert (item:T): Promise<T>
  findOne (id: string): Promise<T>
  findMany (params: findParams): Promise<T[]>
  update (id: string, item:T): Promise<T>
  delete (id: string): Promise<deleteActionResponse>
}
