import MenuHorizontal from '@/components/menu-horizontal'
import BarraLateral from '@/components/menu-lateral'
import theme from '@/styles/theme'
import { ChakraProvider, HStack } from '@chakra-ui/react'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <HStack w={"100vw"} h={"100vh"} overflow={"hidden"}>
        <BarraLateral />
        <HStack h="100vh" w="100vw">
          <MenuHorizontal />
          <Component {...pageProps} />
        </HStack>
      </HStack>

    </ChakraProvider>
  )
}

export default MyApp


