import Link from 'next/link'
import styles from './defaultLayout.module.scss'

export default function Menu () {
    return (
        <nav className={styles.menu}>
            <Link href="/">
                <a className={styles.menuItem}>HOME</a>
            </Link>
        </nav>
    )
}