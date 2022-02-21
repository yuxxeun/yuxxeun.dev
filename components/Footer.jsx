import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <footer className="page-footer font-small special-color-dark">
            <div className="container">
                <ul className="list-unstyled list-inline text-center">
                <li className="list-inline-item">
                    <Link href="github.com">
                        <a className="btn-footer"> CC BY-NC-SA 4.0 </a>
                    </Link>
                </li>
                <li className="list-inline-item">
                    <span> • </span>
                </li>
                <li className="list-inline-item">
                    <Link href="github.com">
                        <a className="btn-footer"> kontak </a>
                    </Link>
                </li>
                <li className="list-inline-item">
                    <span> • </span>
                </li>
                <li className="list-inline-item">
                    <Link href="github.com">
                        <a className="btn-footer"> bookmarks </a>
                    </Link>
                </li>
                </ul>
            </div>
            </footer>
        </>
    )
}

export default Footer