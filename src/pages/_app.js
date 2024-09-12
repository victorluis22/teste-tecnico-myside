import { Inter } from 'next/font/google';
import { ThemeProvider } from 'styled-components';

import Header from "@/components/global/Header";
import GlobalStyle from '@/config/globalStyle';
import theme from '@/config/theme';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme} >
      <GlobalStyle />
      <div className={inter.className}>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </ThemeProvider>
  );
}
