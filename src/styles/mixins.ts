/* eslint-disable @typescript-eslint/ban-types */
import { css } from 'styled-components'

const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}

type cssParams = Parameters<typeof css>
const keys = Object.keys(breakpoints) as Array<keyof typeof breakpoints>

export default keys.reduce((accumulator, label) => {
  accumulator[label] = (...args: cssParams) => {
    return css`
      @media (max-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `
  }
  return accumulator
}, {} as Record<keyof typeof breakpoints, Function>)
