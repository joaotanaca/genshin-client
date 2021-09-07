import mongoose from 'mongoose'
import { TCharacter } from '../../types/Models'

const CharacterSchema = new mongoose.Schema<TCharacter>({
  name: { type: String },
  up_attribute: { type: String },
  weapons: [
    {
      name: String,
      base_atk: String,
      unique_attribute: {
        name: String,
        value: String,
      },
      ability: [
        {
          name: String,
          description: String,
        },
      ],
      rarity: Number,
    },
  ],
  artifacts: {
    attribute_focuses: String,
    sets: [
      {
        name: String,
        bonus_1: String,
        bonus_2: String,
      },
    ],
  },
  constellation: [
    {
      name: String,
      description: String,
      level: Number,
    },
  ],
  talents: [
    {
      name: String,
      typeAttack: String,
      description: [
        {
          name: String,
          description: String,
        },
      ],
      level: Number,
    },
  ],
})

export default mongoose.models.Character ||
  mongoose.model('Character', CharacterSchema)
