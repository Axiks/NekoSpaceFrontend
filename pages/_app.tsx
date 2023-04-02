import 'normalize.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../global.css';

import { LightTheme, BaseProvider } from 'baseui';
import { ThemeProvider } from 'styled-components';
import Headroom from 'react-headroom';
import theme from '@theme';
import { Header, Footer } from '@organisms';


function App({ Component, pageProps }: any) {

  return (
    <>
        <BaseProvider theme={LightTheme}>
          <ThemeProvider theme={theme}>
            <Headroom>
              <Header />
            </Headroom>
            <Component {...pageProps} />
            <Footer />
          </ThemeProvider>
        </BaseProvider>
    </>
  )
};

export default App;