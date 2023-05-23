import type { NextPage } from 'next'
import Head from 'next/head'
import DarkModeToggle from '@components/DarkModeToggle'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Vilmar Fonseca | Software Engineer</title>
            </Head>

            <main className="flex items-center justify-center h-screen flex-col">
                <h1 className={`text-4xl sm:text-6xl md:text-9xl text-center text-gray-800 dark:text-white`}>Vilmar Fonseca</h1>
                <DarkModeToggle/>
            </main>
        </div>
    )
}

export default Home