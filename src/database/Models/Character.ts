import mongoose from 'mongoose'
import { TCharacter } from '../../types/Models'

const CharacterSchema = new mongoose.Schema<TCharacter>({
  name: { type: String, required: [true, 'O nome do personagem é necessário'] },
  up_attribute: {
    type: String,
    required: [true, 'O atributo para subir de nivel é necessário'],
  },
  element: {
    type: String,
    required: [true, 'O elemento do personagem é necessário'],
  },
  weapon_type: {
    type: String,
    required: [true, 'O elemento do personagem é necessário'],
  },
  weapons: [
    {
      name: {
        type: String,
        required: [true, 'O nome da arma do personagem é necessário'],
      },
      base_atk: {
        type: String,
        required: [true, 'O ataque base da arma  é necessário'],
      },
      unique_attribute: {
        name: {
          type: String,
          required: [true, 'O nome da unico da arma é necessário'],
        },
        value: {
          type: String,
          required: [true, 'O valor unico da arma é necessário'],
        },
      },
      ability: [
        {
          name: {
            type: String,
            required: [true, 'O nome da habilidade é necessário'],
          },
          description: {
            type: String,
            required: [true, 'A descrição da habilidade é necessária'],
          },
        },
      ],
      rarity: { type: Number, required: [true, 'A raridade é necessária'] },
    },
  ],
  artifacts: {
    attribute_focuses: {
      type: String,
      required: [true, 'O focu de atributo é necessário'],
    },
    sets: [
      {
        name: { type: String, required: [true, 'O nome do set é necessário'] },
        '2_piece': {
          type: String,
          required: [true, 'O nome da segunda peça é necessário'],
        },
        '4_piece': String,
      },
    ],
  },
  constellation: [
    {
      name: {
        type: String,
        required: [true, 'O nome do talento é necessário'],
      },
      description: {
        type: String,
        required: [true, 'A descrição do talento é necessária'],
      },
      level: {
        type: Number,
        required: [true, 'O level do talento é necessário'],
      },
    },
  ],
  talents: [
    {
      name: {
        type: String,
        required: [true, 'O nome do talento é necessária'],
      },
      typeAttack: {
        type: String,
        required: [true, 'O tipo do ataque do talento é necessário'],
      },
      description: [
        {
          name: {
            type: String,
            required: [true, 'O nome da descrição do talento é necessário'],
          },
          description: {
            type: String,
            required: [
              true,
              'As informações da descrição do talento é necessária',
            ],
          },
        },
      ],
      level: {
        type: Number,
        required: [true, 'O level do talento é necessário'],
      },
    },
  ],
})

export default mongoose.models.Character ||
  mongoose.model('Character', CharacterSchema)
