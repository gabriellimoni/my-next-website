import Head from 'next/head'
import Layout from '../../layouts/default'
import Box from '../../components/box'
import PokeWidget from '../../components/pokeWidget'
import PokemonSearchWidget from '../../components/pokeSearchWidget'

import { useRouter } from 'next/router'
import { generateInitialPokemons, getPokemonDataById } from '../../lib/pokemon'

export default function Pokemon (props) {
    const router = useRouter()

    function PokemonOrFallback () {
        if (!router.isFallback) {
            return (
                <Box title={props.name} width="400px">
                    <PokeWidget {...props}/>
                </Box>
            )
        }
        
        return <h2>Loading Pokemon...</h2>
    }
    
    return (
        <Layout>
            <Head>
                <title>Pokemon - {props.name ? props.name.toUpperCase() : 'Default'}</title>
            </Head>
            <PokemonSearchWidget/>
            <PokemonOrFallback/>
        </Layout>
    )
}

export async function getStaticProps (context) {
    const pokeId = context.params.id
    const pokeData = await getPokemonDataById(pokeId)

    return {
        props: {
            ...pokeData,
        },
        revalidate: 20,
    }
}

export async function getStaticPaths () {
    const data = await generateInitialPokemons(1)
    const paths = data.map(d => { 
        return { 
            params: {
                id: String(d.id)
            }
        } 
    })

    return {
        paths,
        fallback: true,
    }
}