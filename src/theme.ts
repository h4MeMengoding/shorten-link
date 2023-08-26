import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  fonts: {
    heading:
      "'Open Sans', sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    body: "'Open Sans', sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
  }
})

export default theme
