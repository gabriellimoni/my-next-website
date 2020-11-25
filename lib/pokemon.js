const axios = require('axios')

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

async function generateInitialPokemons (number=1) {
    const initialUrl = `${BASE_URL}?limit=${number}`
    const { data } = await axios.get(initialUrl)

    return data.results.map(res => {
        const url = res.url
        const splittedUrl = url.split('/')
        const onlyId = splittedUrl[splittedUrl.length -2]
        return {
            id: onlyId,
        }
    })
}

async function getPokemonDataById (poke_id) {
    const url = `${BASE_URL}/${String(poke_id).toLowerCase()}`
    const { data } = await axios.get(url)

    return {
        id: String(data.id),
        name: data.name,
        experience: data.base_experience,
        sprite: data.sprites.front_default,
        height: data.height,
        weight: data.weight,
        types: data.types.map(type => type.type.name)
    }
}

module.exports = {
    generateInitialPokemons,
    getPokemonDataById,
}