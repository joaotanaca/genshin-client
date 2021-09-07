export type TCharacter = {
  name: string
  up_attribute: string
  element: string
  weaponType: string
  weapons: {
    name: string
    base_atk: string
    unique_attribute: {
      name: string
      value: string
    }
    ability: [
      {
        name: string
        description: string
      }
    ]
    rarity: 5
  }[]
  artifacts: {
    attribute_focuses: string
    sets: {
      name: string
      '2_piece': string
      '4_piece'?: string
    }[]
  }
  constellation: {
    name: string
    description: string
    level: number
  }[]
  talents: {
    name: string
    typeAttack: string
    description: [
      {
        name: string
        description: string
      }
    ]
    level: number
  }[]
}
