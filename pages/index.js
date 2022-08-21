import Head from 'next/head'
import Header from '../components/Header'

import { getSession } from 'next-auth/react'
import Login from '../components/Login'

export default function Home({ session }) {
  if(!session) return <Login />

  return (
    <>
      <Head>
        <title>Facebook Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="favicon.png" />
      </Head>
      <div>
        <Header />
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  return {
    props: {
      session
    }
  }
}
