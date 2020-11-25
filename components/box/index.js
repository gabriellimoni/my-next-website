import styles from './box.module.scss'

export default function Box({ title, children, width }) {
    width = width || 'initial'
    const upperCaseTitle = title.toUpperCase()
    return (
        <div className={styles.box} style={{ width }}>
            <h1 className={styles.boxTitle}>{upperCaseTitle}</h1>
            
            <div className={styles.boxContent}>{children}</div>
        </div>
    )
}