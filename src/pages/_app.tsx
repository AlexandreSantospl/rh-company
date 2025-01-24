import BarraLateral from '@/components/menu-lateral'
import theme from '@/styles/theme'
import { ChakraProvider, HStack } from '@chakra-ui/react'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <HStack w={"100vh"}>

        <BarraLateral />
        <Component {...pageProps} />
      </HStack>

    </ChakraProvider>
  )
}

export default MyApp
