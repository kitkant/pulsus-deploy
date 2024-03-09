import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import localFont from 'next/font/local'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const arial = localFont({ src: '../../pages/fonts/Arial-MT.woff' })

const Timer = () => {
	const now = new Date()
	const hours = now.getHours()
	const minutes = now.getMinutes()
	const seconds = now.getSeconds()

	const res = [
		hours.toString().padStart(2, '0'),
		minutes.toString().padStart(2, '0'),
		seconds.toString().padStart(2, '0'),
	].join(':')

	const [formatted, setFormatted] = useState(res)
	useEffect(() => {
		setInterval(() => {
			const now = new Date()
			const hours = now.getHours()
			const minutes = now.getMinutes()
			const seconds = now.getSeconds()

			setFormatted(
				[
					hours.toString().padStart(2, '0'),
					minutes.toString().padStart(2, '0'),
					seconds.toString().padStart(2, '0'),
				].join(':')
			)
		}, 1000)
	}, [])

	useGSAP(() => {
		gsap.to('.box', { opacity: '1', duration: 2, delay: 1 })
	})

	return <Clock className={arial.className + ' ' + 'box'}>{formatted}</Clock>
}

const Clock = styled.time`
	opacity: 0;
	cursor: default;
	font-size: 1000%;
	letter-spacing: -9px;
	line-height: normal;
	@media (max-width: 1440px) {
		font-size: 152px;
	}
`

export default Timer
