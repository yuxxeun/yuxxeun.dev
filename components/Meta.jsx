import Head from "next/head"

const title = "LLVM" 
const description = "LLVM boilerplate"

const Meta = () => {
    return (
        <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />

            {/* Twitter meta card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@yuxxeun" />
            <meta name="twitter:creator" content="@yuxxeun" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content="/favicon/facicon.jpg" />
        </Head>
        </>
    )
}

export default Meta