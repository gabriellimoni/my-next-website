import Head from 'next/head'
import DefaultLayout from '../layouts/default'

export default function Home() {
  return (
    <DefaultLayout>
      <Head>
        <title>Limoni - Personal</title>
      </Head>

      <p>
        Conteúdo do meu site
      </p>
    </DefaultLayout>
  )
}
