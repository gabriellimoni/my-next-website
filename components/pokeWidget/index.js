import styles from './pokeWidget.module.scss'

export default function PokeWidget ({ 
    id, sprite, types, experience,
    height, weight
}) {
    return (
        <article className={styles.wrapper}>
            <div className={styles.side}>
                <img width="150" src={sprite}/>
                <h3>Types: {types.join(', ')}</h3>
            </div>
            <div className={styles.side}>
                <h3 className={styles.stats}>Id: {id}</h3>
                <h3 className={styles.stats}>Xp: {experience}</h3>
                <h3 className={styles.stats}>Height: {height}</h3>
                <h3 className={styles.stats}>Weight: {weight}</h3>
            </div>
        </article>
    )
}