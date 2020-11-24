import styles from './box.module.scss'

export default function Box({ title, children }) {
    return (
        <div className={styles.box}>
            <h1 className={styles.boxTitle}>{title}</h1>
            
            <p>{children}</p>
        </div>
    )
}