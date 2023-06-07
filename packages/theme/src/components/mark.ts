import { ComponentStyle, mode, isDefaultColor } from '@yamada-ui/core'
import { transparentizeColor, toneColor, getColor } from '@yamada-ui/utils'

export const Mark: ComponentStyle = {
  baseStyle: {
    px: '1',
    py: '1',
  },

  variants: {
    solid: ({ theme: t, colorMode: m, colorScheme: c = 'gray' }) => ({
      bg: isDefaultColor(
        [toneColor(c, 500)(t, m), transparentizeColor(toneColor(c, 500)(t, m), 0.6)(t, m)],
        [`${c}.500`, transparentizeColor(`${c}.500`, 0.6)(t, m)],
      )(c),
      color: [`white`, `whiteAlpha.800`],
    }),
    subtle: ({ theme: t, colorMode: m, colorScheme: c = 'gray' }) => ({
      bg: isDefaultColor(
        [toneColor(c, 100)(t, m), transparentizeColor(toneColor(c, 200)(t, m), 0.16)(t, m)],
        [`${c}.100`, transparentizeColor(`${c}.200`, 0.16)(t, m)],
      )(c),
      color: [`black`, `white`],
    }),
    outline: ({ theme: t, colorMode: m, colorScheme: c = 'gray' }) => {
      const color = isDefaultColor(
        mode(toneColor(c, 500)(t, m), transparentizeColor(toneColor(c, 200)(t, m), 0.8)(t, m))(m),
        mode(getColor(`${c}.500`)(t, m), transparentizeColor(`${c}.200`, 0.8)(t, m))(m),
      )(c)

      return {
        color,
        boxShadow: `inset 0 0 0px 1px ${color}`,
      }
    },
  },

  defaultProps: {
    variant: 'subtle',
    colorScheme: 'secondary',
  },
}