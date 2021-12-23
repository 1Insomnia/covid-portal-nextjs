import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
        <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
      </Head>
      <body className="bg-blue-dark text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
