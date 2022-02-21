import Head from "next/head"

const title = "yuxxeun" 
const description = "yuxxeun.dev"

const Meta = () => {
    return (
        <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <icon name="favicon" rel="/favcion/favicon.jpg" />

            {/* Twitter meta card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@yuxxeun" />
            <meta name="twitter:creator" content="@yuxxeun" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content="/favicon/favicon.jpg" />
        </Head>
        </>
    )
}

export default Meta