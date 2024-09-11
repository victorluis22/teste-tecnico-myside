import Header from "@/components/global/Header";
import "@/styles/globals.css";
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'styled-components';

const inter = Inter({ subsets: ['latin'] });

const theme = {
  colors: {
    background: "#F8F8F9",
    foreground: "#fff"
  }
}

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme} >
      <div className={inter.className}>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <footer>
            sadsadsa
        </footer>
      </div>
    </ThemeProvider>
  );
}
