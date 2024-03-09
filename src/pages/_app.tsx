import Loader from '@/features/Loader/Loader'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import { useEffect, useState } from 'react'


const myFont = localFont({ src: './fonts/gilroy-regular.ttf' })
const arial = localFont({ src: './fonts/Arial-MT.woff' })


export default function App({ Component, pageProps }: AppProps) {
	const [isLoading, setIsLoading] = useState(true)
	const timerId = setTimeout(() => {
		setIsLoading(false)
	}, 5500)
	
	// useEffect(() => {
	// 	console.log(isLoading)
	// 	const handleStart = () => {
	// 		setIsLoading(true)
	// 	}

	// 	const handleComplete = () => {
	// 		setIsLoading(false)
	// 	}

	// 	Router.events.on('routeChangeStart', handleStart)
	// 	Router.events.on('routeChangeComplete', handleComplete)
	// 	Router.events.on('routeChangeError', handleComplete)

	// 	return () => {
	// 		Router.events.off('routeChangeStart', handleStart)
	// 		Router.events.off('routeChangeComplete', handleComplete)
	// 		Router.events.off('routeChangeError', handleComplete)
	// 	}
	// }, [])

	// останавливаем таймер
	
	
	return (
		<div className='h-screen'>
			{isLoading ? (
				<Loader /> // Здесь может быть ваш кастомный прелоадер
			) : (
				<main className={myFont.className}>
      <Component {...pageProps} />
    </main>
			)}
		</div>
	)
}
