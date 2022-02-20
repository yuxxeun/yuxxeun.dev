import Meta from "./Meta"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
    return (
        <>
        <Meta />
        <Navbar />
        { children }
        </>
    )
}

export default Layout