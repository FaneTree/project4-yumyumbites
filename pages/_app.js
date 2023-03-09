import React, { useEffect, useState } from 'react';
import { Layout } from '../components';

import 'tailwindcss/tailwind.css'
import '../styles/globals.scss';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

// import React from 'react';

// import '../styles/globals.scss';
// import { Layout } from '../components';

// function MyApp({ Component, pageProps }) {
//   return (
  //   <Layout>
  //     <Component {...pageProps} />
  //   </Layout>
  // );
// }

// export default MyApp;