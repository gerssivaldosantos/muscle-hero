import {
  IsString,
  IsEnum,
  IsUrl,
  IsNotEmpty,
  IsArray,
  ValidateNested,
  validate,
  IsInstance,
  ValidationError
} from 'class-validator'
import { v4 as uuidv4 } from 'uuid'

export enum Muscle {
  Abs = 'Abdômen',
  Legs = 'Quadríceps',
  Arms = 'Bíceps',
  Chest = 'Peito',
  Back = 'Costas',
  Shoulders = 'Ombros',
  calf = 'Panturrilha',
  hamstring = 'Posterior de coxa',
  Traps = 'Trapézios',
  Triceps = 'Tríceps'

}

export enum Equipment {
  None = 'Nenhum',
  Dumbbells = 'Halteres',
  Barbell = 'Barra',
  ResistanceBands = 'Faixas elásticas',
  Machines = 'Máquinas',
  FixeBar = 'Barra fixa',
  Pole = 'Polia',
  MachineOrDumbbells = 'Máquina ou Halteres',
  Machine = 'Máquina',
  LegCurlMachine = 'Máquina de flexão de pernas',
  legTableMachine = 'Máquina de mesa flexora',
  Bench = 'Banco'

}

export enum Level {
  Beginner = 'Iniciante',
  Intermediate = 'Intermediário',
  Advanced = 'Avançado',
}

export class VideoUrls {
  @IsString()
  @IsNotEmpty()
    ptBr: string | undefined

  @IsString()
  @IsNotEmpty()
    en: string | undefined

  constructor (params: VideoUrls) {
    this.ptBr = params.ptBr
    this.en = params.en
  }
}

export default class Exercise {
  id: string

  @IsString()
  @IsNotEmpty()
    name: string

  @IsEnum(Muscle)
    muscle: string

  @IsEnum(Equipment)
    equipment: string

  @IsEnum(Level)
    level: string

  @ValidateNested()
  @IsInstance(VideoUrls)
    videoUrls: object

  @IsUrl()
  @IsNotEmpty()
    imageUrl: string

  @IsArray()
  @IsNotEmpty({ each: true })
  @IsString({ each: true })
    instructions: string[]

  constructor (params: Exercise) {
    this.id = params.id ?? uuidv4()
    this.name = params.name
    this.muscle = params.muscle
    this.equipment = params.equipment
    this.level = params.level
    this.videoUrls = params.videoUrls
    this.imageUrl = params.imageUrl
    this.instructions = params.instructions
  }

  static async create (data: any): Promise<Exercise | ValidationError[]> {
    const exercise = new Exercise(
      {
        ...data,
        videoUrls: new VideoUrls(data.videoUrls)
      }
    )
    const errors = await validate(exercise)
    if (errors.length > 0) {
      return errors
    }
    return exercise
  }
}
