import Head from 'next/head'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}
