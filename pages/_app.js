import { ChakraProvider } from '@chakra-ui/react';
import { Fade } from '@chakra-ui/react';
import MainNav from '../components/nav/MainNav';
import theme from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fade in={true} style={{ transitionDuration: "1s" }}>
        <MainNav />
      </Fade>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
