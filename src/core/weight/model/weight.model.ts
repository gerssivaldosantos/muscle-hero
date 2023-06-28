import { IsDate, IsNumber } from 'class-validator'
import { createWeight } from 'src/core/weight/dtos/create-weight.dto'
import { EntityModelBase } from 'src/core/base/model/entity.model'

/**
 * Model representing a weight entry.
 * Extends the EntityModelBase class.
 */
export class WeightModel extends EntityModelBase {
  /**
   * The value of the weight entry.
   * @type {number}
   * @memberof WeightModel
   */
  @IsNumber()
    value

  /**
   * The date and time when the weight entry was created.
   * @type {Date}
   * @memberof WeightModel
   */
  @IsDate()
    createdAt

  /**
   * Creates an instance of the WeightModel class.
   * @param {createWeight} data - The data object containing the properties of the weight entry.
   * @memberof WeightModel
   */
  constructor (data: createWeight) {
    super(data.id)

    /**
     * The value of the weight entry.
     * @type {number}
     * @memberof WeightModel
     */
    this.value = data.value

    /**
     * The date and time when the weight entry was created.
     * @type {Date}
     * @memberof WeightModel
     */
    this.createdAt = data.createdAt
  }
}
