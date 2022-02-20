import Link from 'next/link'

const Navbar = () => {
    return (
        <> 
            <nav className="navbar ms-auto me-auto center-align navbar-expand-lg navbar-dark sticky-top">
            <div className="container py-2">
                <a className="logo navbar-brand me-5" href="#">NAVBARRRR</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mr-5">
                    <li className="nav-item ps-5">
                        <Link href="/">
                            <a className="nav-link active" aria-current="page">Home</a>
                        </Link>
                    </li>
                    <li className="nav-item ps-5">
                        <Link href="/">
                            <a className="nav-link" aria-current="page">About</a>
                        </Link>
                    </li>
                    <li className="nav-item ps-5">
                        <Link href="/">
                            <a className="nav-link" aria-current="page">Contact</a>
                        </Link>
                    </li>
                    <li className="nav-item ps-5">
                        <Link href="/">
                            <a className="nav-link" aria-current="page">Blog</a>
                        </Link>
                    </li>
                    <li className="nav-item ps-5">
                        <Link href="/">
                            <a className="nav-link" aria-current="page">Pricing</a>
                        </Link>
                    </li>
                    <li className="nav-item ps-5">
                        <Link href="/">
                            <a className="nav-link" aria-current="page">Integrations</a>
                        </Link>
                    </li>
                </ul>
                <form className="d-flex">
                    <button className="cta-header" type="submit">Sign In</button>
                </form>
                
                
                </div>
            </div>
            </nav>  
        </>
    )
}

export default Navbar