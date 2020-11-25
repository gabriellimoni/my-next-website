import { useRouter } from 'next/router'
const { useState } = require("react")

export default function PokemonSearchWidget () {
    const router = useRouter()
    const [text, setText] = useState('')

    const handleInputKeyPress = (event) => {
        if (event.key === 'Enter') {
            router.push(`/pokemon/${text}`)
            setText('')
        }
    }
    
    return (
        <>
            <h4 style={{ margin: "5px 0" }}>Search Pokemon (by ID or name)</h4>
            <input 
                type="text"
                autoFocus={true}
                value={text}
                onChange={(event) => setText(event.target.value)}
                onKeyPress={handleInputKeyPress}
            />
        </>
    )
}