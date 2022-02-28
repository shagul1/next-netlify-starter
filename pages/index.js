import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import React from 'react'

export default function Home() {
  
  const [siteURL, setSiteURL] = React.useState(0);
  
  React.useEffect(() => {
    setSiteURL(window.location.href);
  });
  
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <p>
          Site URL: {siteURL}
        </p>
      </main>

      <Footer />
    </div>
  )
}
