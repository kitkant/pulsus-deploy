import { QuotesAPI } from '@/api/QuotesData'
import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Quotes = () => {
	const [quotes, setQuotes] = useState({ quote: '', author: '' })

	useEffect(() => {
		QuotesAPI.getQuotes()
			.then((data): any => {
				setQuotes({ quote: data.data[0].quote, author: data.data[0].author })
			})
			.catch((error): any => {
				// console.log(error)
			})
	}, [])

	useGSAP(() => {
		gsap.to('.box', { opacity: '1', duration: 3, delay: 5 })
	})

	return (
		<Wrapper className='flex flex-col max-w-[70%] gap-[10px] items-center text-center box'>
			<Quo className='text-xl'>{quotes.quote}</Quo>
			<Author className='text-[#ffffffcc] text-lg '>{quotes.author}</Author>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	opacity: 0;
`
const Quo = styled.span`
	@media (max-width: 1440px) {
		font-size: 18px;
	}
`
const Author = styled.span`
	@media (max-width: 1440px) {
		font-size: 16px;
	}
`
export default Quotes
