import Link from '@/components/Link'
import Head from 'next/head'

export default function FourZeroFour() {
  return (
    <>
    <Head>
      <title>451 - Unavailable</title>
    </Head>
    <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
          451
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          {`Unavailable For Legal Reasons`}
        </p>
        <p className="mb-8">
          {`Mengapa menampilkan 404 secara umum ketika gue bisa membuatnya sedikit terlihat misterius?`}
        <br/><br/>
        <span className="italic">{`I'm guessing you spelled something wrong.`} <br/>{`Can u double check that`} <b>{`URL?`}</b></span>
        </p>
        <Link href="/">
          <button className="text-black inline rounded-lg border px-4 py-2 text-sm font-medium leading-5 dark:text-white">
            Kembali ke beranda
          </button>
        </Link>
      </div>
    </div>
    </>
  )
}
