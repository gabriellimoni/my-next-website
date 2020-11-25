import Layout from '../../layouts/default'
import Box from '../../components/box'

import { useRouter } from 'next/router'

export default function Content (props) {
    const router = useRouter()

    function ContentOrFallback () {
        if (!router.isFallback) {
            return ContentData(props)
        }
        
        return <h2>Loading content...</h2>
    }

    function ContentData ({ text, id }) {
        return <Box title={id}>{text}</Box>
    }
    
    return (
        <Layout>
            <ContentOrFallback/>
        </Layout>
    )
}

export async function getStaticProps (context) {
    await new Promise(res => setTimeout(res, 1000))
    return {
        props: {
            text: 'Teste',
            id: context.params.id
        }
    }
}

export async function getStaticPaths () {
    return {
        paths: [
            {
                params: { id: '1' }
            }
        ],
        fallback: true,
    }
}