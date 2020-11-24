import Head from 'next/head'
import DefaultLayout from '../layouts/default'

import Box from '../components/box'
import { useEffect, useState } from 'react'

export default function Home({ preRenderedText }) {
  const [text, setText] = useState('')

  useEffect(() => {
    async function renderText () {
      const response = await fetch('/api/generateText')
      const responseData = await response.json()
      setText(responseData.text)
    }

    renderText()
  }, [])

  return (
    <DefaultLayout>
      <Head>
        <title>Limoni - Personal</title>
      </Head>

      <Box title="Teste de Box">
        {text}
      </Box>
      
      <Box title="Teste de Box - Texto pre-renderizado">
        {preRenderedText}
      </Box>
      
    </DefaultLayout>
  )
}


export async function getStaticProps () {
  const response = await fetch('https://baconipsum.com/api/?type=meat-and-filler')
  const responseData = await response.json()
  return {
    props: {
      preRenderedText: responseData.join(' ')
    }
  }
}