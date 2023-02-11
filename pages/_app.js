'use client';
// import { ApolloProvider } from '@apollo/client';
import '../styles/globals.css'
// import { client } from '../components/lib/apollo.js';
// import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
 const [Loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
  },[])

  return <>
          {/* <ApolloProvider client={client}> */}
            {Loading && <Component {...pageProps} />}
          {/* </ApolloProvider> */}
        </>
}
export default MyApp
