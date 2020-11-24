import Link from 'next/link'
import styles from './defaultLayout.module.scss'

export default function Footer () {
    return (
        <nav className={styles.footer}>
            <a 
                className={styles.footerLink}
                href="http://api.whatsapp.com/send?phone=+5514981135119"
                target="_blank"
            >
                Learning NEXT - Gabriel Limoni
            </a>
        </nav>
    )
}