import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: '"Inter", sans-serif',
    body: '"Inter", sans-serif',
  },
  colors: {
    qbe: {
      50: '#E6F0FF',
      100: '#B8D5FF',
      200: '#8ABAFF',
      300: '#5C9FFF',
      400: '#2E84FF',
      500: '#0069FF', // QBE primary blue
      600: '#0054CC',
      700: '#003F99',
      800: '#002A66',
      900: '#001533',
    },
    secondary: {
      50: '#FFF5E6',
      100: '#FFE4B8',
      200: '#FFD28A',
      300: '#FFC15C',
      400: '#FFAF2E',
      500: '#FF9E00', // QBE secondary orange
      600: '#CC7E00',
      700: '#995F00',
      800: '#663F00',
      900: '#332000',
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'full',
      },
      variants: {
        solid: (props) => ({
          bg: `${props.colorScheme}.500`,
          color: 'white',
          _hover: {
            bg: `${props.colorScheme}.600`,
          },
        }),
        outline: (props) => ({
          border: '2px solid',
          borderColor: `${props.colorScheme}.500`,
          color: `${props.colorScheme}.500`,
        }),
      },
    },
    Card: {
      baseStyle: {
        p: '6',
        bg: 'white',
        boxShadow: 'xl',
        borderRadius: '2xl',
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
      },
    },
  },
})

export default theme