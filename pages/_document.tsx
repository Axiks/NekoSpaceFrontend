import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components'
import { Provider as StyletronProvider } from 'styletron-react';
import { styletron } from '../styletron';


class MyDocument extends Document {
  static async getInitialProps(context: any) {
    const sheet = new ServerStyleSheet();

    const renderPage = () =>
      context.renderPage({
        enhanceApp: (App: any) => (props: any) =>
          sheet.collectStyles(  
            <StyletronProvider value={styletron}>
              <App {...props} />
            </StyletronProvider>
          ),
      })

    const initialProps = await Document.getInitialProps({
      ...context,
      renderPage,
    })
    const stylesheets = (styletron as any).getStylesheets() || []
    return { ...initialProps, stylesheets, styles: [initialProps.styles, sheet.getStyleElement()] }
  }

  render() {
    return (
      <Html>
        <Head>
          {(this as any).props.stylesheets.map((sheet: any, i: number) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs['data-hydrate']}
              key={i}
            />
          ))}
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Kosugi+Maru&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;