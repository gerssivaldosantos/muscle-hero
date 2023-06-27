import { IsUUID } from 'class-validator'
import { v4 as uuid } from 'uuid'

/**
 * Base class for entity models.
 */
export class EntityModelBase {
  /**
   * The unique identifier of the entity.
   * @type {string}
   * @memberof EntityModelBase
   */
  @IsUUID()
    id

  /**
   * Creates an instance of the EntityModelBase class.
   * @param {string} [id] - The optional ID of the entity. If not provided, a new UUID will be generated.
   * @memberof EntityModelBase
   */
  constructor (id: string) {
    /**
     * The unique identifier of the entity.
     * @type {string}
     * @memberof EntityModelBase
     */
    this.id = id || uuid()
  }
}
