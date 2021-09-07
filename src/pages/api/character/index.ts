/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from 'next'
import Character from 'models/Character'
import connect from 'database/connect'

type Data = {
  data?: any
  err?: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req

  await connect()

  switch (method) {
    case 'GET':
      const characters = await Character.find()
      return res.status(200).json({ data: characters })
    case 'POST':
      try {
        const character = await Character.create({
          name: 'Shogun Raiden',
          up_attribute: 'Energy Recharge',
          element: 'Pyro',
          weaponType: 'Pyro',
          weapons: [
            {
              name: 'Engulfing Lightning',
              base_atk: '46 - 608',
              unique_attribute: {
                name: 'Energy Recharge',
                value: '12% - 55.1%',
              },
              ability: [
                {
                  name: 'Timeless_Dream',
                  description:
                    'ATK increased by 28% of Energy Recharge over the base 100%. You can gain a maximum bonus of 80% ATK. Gain 30% Energy Recharge for 12s after using an Elemental Burst.',
                },
              ],
              rarity: 5,
            },
          ],
          artifacts: {
            attribute_focuses: 'ATK% / Electro DMG / CRIT DMG',
            sets: [
              {
                name: 'Emblem of Severed Fate',
                '2_piece': 'Energy Recharge +20%.',
                '4_piece':
                  'Increases Elemental Burst DMG by 25% of Energy Recharge. A maximum of 75% bonus DMG can be obtained in this way. ',
              },
            ],
          },
          constellation: [
            {
              name: 'Ominous Inscription',
              description:
                'Chakra Desiderata will gather Resolve even faster. When Electro characters use their Elemental Bursts, the Resolve gained is increased by 80%. When characters of other Elemental Types use their Elemental Bursts, the Resolve gained is increased by 20%. ',
              level: 1,
            },
          ],
          talents: [
            {
              name: 'Origin',
              typeAttack: 'Normal Attack',
              description: [
                {
                  name: 'Normal Attack',
                  description: 'Performs up to 5 consecutive spear strikes.',
                },
              ],
              level: 1,
            },
          ],
        })
        return res.status(200).json({ data: character })
      } catch (err) {
        return res.status(400).json({ err })
      }

    default:
      break
  }
}
