import { Inter } from 'next/font/google';
import { ThemeProvider } from 'styled-components';
import { Container, Main } from '@/styles/app';
import { CartProvider } from '@/context/cart';

import Header from "@/components/global/Header";
import GlobalStyle from '@/config/globalStyle';
import theme from '@/config/theme';


const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme} >
      <CartProvider>
        <GlobalStyle />
        <Container className={inter.className}>
          <Header />
          <Main>
            <Component {...pageProps} />
          </Main>
        </Container>
      </CartProvider>
    </ThemeProvider>
  );
}
