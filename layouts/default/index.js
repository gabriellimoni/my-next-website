import styles from './defaultLayout.module.scss'
import Menu from './menu'
import Footer from './footer'

export default function DefaultLayout ({ children }) {
    return (
        <div className={styles.defaultLayout}>
            <Menu />

            <div className={styles.content}>
                {children}
            </div>

            <Footer />
        </div>
    )
}