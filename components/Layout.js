import React from 'react';
import Head from 'next/head';

const Layout= ({children}) => {
  return(
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
      </Head>
      <div className='container'>
        {children}
      </div>
    </>
  )
}
export default Layout;