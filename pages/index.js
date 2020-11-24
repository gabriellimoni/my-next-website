import Head from 'next/head'
import DefaultLayout from '../layouts/default'

import Box from '../components/box'

export default function Home() {
  return (
    <DefaultLayout>
      <Head>
        <title>Limoni - Personal</title>
      </Head>

      <Box title="Teste de Box">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Box>
      
    </DefaultLayout>
  )
}
