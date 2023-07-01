/**
 * Represents the parameters used for querying multiple items in a repository.
 */
type findParamsConstrutorParams = {
  limit?: number;
  offset?: number;
  query?: Record<string, any>;
  orderBy?: string;
};

/**
 * The FindParams class encapsulates the parameters used for querying multiple items in a repository.
 */
export class FindParams {
  /**
   * The maximum number of items to retrieve.
   * @private
   */
  private _limit: number

  /**
   * The number of items to skip.
   * @private
   */
  private _offset: number

  /**
   * The query object containing additional filtering conditions.
   * @private
   */
  private _query: Record<string, any>

  /**
   * The field used for ordering the retrieved items.
   * @private
   */
  private _orderBy: string

  /**
   * Gets the field used for ordering the retrieved items.
   * @returns {string} - The field used for ordering.
   */
  get orderBy (): string {
    return this._orderBy
  }

  /**
   * Sets the field used for ordering the retrieved items.
   * @param {string} value - The field used for ordering.
   */
  set orderBy (value: string) {
    this._orderBy = value
  }

  /**
   * Gets the query object containing additional filtering conditions.
   * @returns {Record<string, any>} - The query object.
   */
  get query (): Record<string, any> {
    return this._query
  }

  /**
   * Sets the query object containing additional filtering conditions.
   * @param {Record<string, any>} value - The query object.
   */
  set query (value: Record<string, any>) {
    this._query = value
  }

  /**
   * Gets the number of items to skip.
   * @returns {number} - The number of items to skip.
   */
  get offset (): number {
    return this._offset
  }

  /**
   * Sets the number of items to skip.
   * @param {number} value - The number of items to skip.
   */
  set offset (value: number) {
    this._offset = value
  }

  /**
   * Gets the maximum number of items to retrieve.
   * @returns {number} - The maximum number of items to retrieve.
   */
  get limit (): number {
    return this._limit
  }

  /**
   * Sets the maximum number of items to retrieve.
   * @param {number} value - The maximum number of items to retrieve.
   */
  set limit (value: number) {
    this._limit = value
  }

  /**
   * Creates an instance of FindParams.
   * @param {findParamsConstrutorParams} params - The optional parameters for FindParams.
   */
  constructor (params?: findParamsConstrutorParams) {
    this.limit = params?.limit || 10
    this.offset = params?.offset || 0
    this.query = params?.query || {}
    this.orderBy = params?.orderBy || 'id'
  }
}

/**
 * Represents the response of a repository action.
 */
export type repositoryActionResponse = {
  success: boolean;
  reason?: string;
  data?: unknown;
};

/**
 * Represents the interface for a repository.
 * @template T - The type of the repository items.
 */
export interface RepositoryInterface<T> {
  /**
   * Inserts an item into the repository.
   * @param {T} item - The item to insert.
   * @returns {Promise<repositoryActionResponse>} - A promise that resolves to the response of the insert action.
   */
  insert(item: T): Promise<repositoryActionResponse>;

  /**
   * Finds an item in the repository by ID.
   * @param {string} id - The ID of the item to find.
   * @returns {Promise<T | undefined>} - A promise that resolves to the found item, or undefined if not found.
   */
  findOne(id: string): Promise<T | undefined>;

  /**
   * Finds multiple items in the repository based on the provided parameters.
   * @param {FindParams} params - The parameters for the find operation.
   * @returns {Promise<T[]>} - A promise that resolves to an array of the found items.
   */
  findMany(params: FindParams): Promise<T[]>;

  /**
   * Updates an item in the repository based on ID.
   * @param {string} id - The ID of the item to update.
   * @param {T} item - The updated item.
   * @returns {Promise<repositoryActionResponse>} - A promise that resolves to the response of the update action.
   */
  update(id: string, item: T): Promise<repositoryActionResponse>;

  /**
   * Deletes an item from the repository by ID.
   * @param {string} id - The ID of the item to delete.
   * @returns {Promise<repositoryActionResponse>} - A promise that resolves to the response of the delete action.
   */
  delete(id: string): Promise<repositoryActionResponse>;
}
