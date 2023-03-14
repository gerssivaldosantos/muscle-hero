export type findParams = {
  limit: number,
  offset: number,
  query?: object
}

export type deleteActionResponse = {
  success: boolean,
  reason?: string
}

export interface RepositoryInterface <T> {
  insert (item:T): Promise<T | undefined>
  findOne (id: string): Promise<T | undefined>
  findMany (params: findParams): Promise<T[]>
  update (id: string, item:T): Promise<boolean>
  delete (id: string): Promise<deleteActionResponse>
}
