import Menu from './menu'

export default function DefaultLayout ({ children }) {
    return (
        <div>
            <Menu />
            

            {/* Content */}
            {children}

            {/* Footer */}
        </div>
    )
}