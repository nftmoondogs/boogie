// src/pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="https://i.ibb.co/FbkFrcd/vj-QDv-Rcq-Abjs-YJpkh-Quuj-Kro0t-Efgc471-Mk-Wc-Bxv-Fv3j-H4-Mag-GCA7-Ftcc-R3-KU1-6-Cr-B-zl-Z5-EANV3-B.gif" />
          {/* Add custom scripts here */}
          <script src='https://terminal.jup.ag/main-v2.js' defer></script>
          {/* ... */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
