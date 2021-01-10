import { extendTheme, Theme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const customTheme: Theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontFamily: 'Poppins, sans-serif',
      },
    },
  },
  styles: {
    global: (props) => ({
      body: {
        color: mode('gray.700', 'whiteAlpha.900')(props),
        fontFamily: 'Poppins, sans-serif',
      },
    }),
  },
  shadows: {
    base: '0 2px 20px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06)',
  },
})

export default customTheme
