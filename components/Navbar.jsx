import Link from 'next/link'

const Navbar = () => {
    return (
        <> 
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
            <div className="container">
                <a className="logo navbar-brand" href="#"><h5>yuxxeun®</h5></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0 mr-5">
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
                </ul>
                </div>
            </div>
            </nav>  
        </>
    )
}

export default Navbar