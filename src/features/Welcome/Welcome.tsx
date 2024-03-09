import styled from '@emotion/styled'
import Image from 'next/image'
import { useState } from 'react'
import Cookies from 'universal-cookie'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Welcome = () => {
	const cookies = new Cookies(null, { path: '/' })
	const [timeOfDay, setTimeOfDay] = useState('')
	const [dataInput, setDataInput] = useState(
		cookies.get('name') ? cookies.get('name') : ''
	)
	const [statusEdit, setStatusEdit] = useState(
		cookies.get('name') ? false : true
	)

	const timeOfDays = [
		'Good morning',
		'Good afternoon',
		'Good evening',
		'Good night',
	]
	const now = new Date()
	const hours = now.getHours()

	if (hours >= 6 && hours < 12) {
		if (timeOfDay !== timeOfDays[0]) setTimeOfDay(timeOfDays[0])
	} else if (hours >= 12 && hours < 18) {
		if (timeOfDay !== timeOfDays[1]) setTimeOfDay(timeOfDays[1])
	} else if (hours >= 18 && hours <= 23) {
		if (timeOfDay !== timeOfDays[2]) setTimeOfDay(timeOfDays[2])
	} else if (hours >= 0 && hours < 6) {
		if (timeOfDay !== timeOfDays[3]) setTimeOfDay(timeOfDays[3])
	}

	setInterval(() => {
		const now = new Date()
		const hours = now.getHours()

		if (hours >= 6 && hours < 12) {
			if (timeOfDay !== timeOfDays[0]) setTimeOfDay(timeOfDays[0])
		} else if (hours >= 12 && hours < 18) {
			if (timeOfDay !== timeOfDays[1]) setTimeOfDay(timeOfDays[1])
		} else if (hours >= 18 && hours <= 23) {
			if (timeOfDay !== timeOfDays[2]) setTimeOfDay(timeOfDays[2])
		} else if (hours >= 0 && hours < 6) {
			if (timeOfDay !== timeOfDays[3]) setTimeOfDay(timeOfDays[3])
		}
	}, 1000)

	const dateInputChange = (event: any) => {
		setDataInput(event.target.value)
	}

	const saveName = (name: string) => {
		if (name === '') return
		cookies.set('name', name)
		setStatusEdit(false)
	}
	const enterInput = (e: any) => {
		if (e.target.value === '' || e.code !== 'Enter') return
		if (e.code === 'Enter') {
			saveName(dataInput)
		}
	}

	useGSAP(() => {
		gsap.to('.box', { opacity: '1', duration: 3, delay: 4 })
	})

	return (
		<Wrapper className='text-3xl flex gap-[10px] items-center mt-[10px] box'>
			<TimeOfDay className='text-5xl'>{timeOfDay},</TimeOfDay>
			<span className='text-5xl'>
				{statusEdit ? (
					<Input
						onKeyDown={enterInput}
						placeholder='Type your name'
						value={dataInput}
						onChange={dateInputChange}
					></Input>
				) : (
					<span>{dataInput}</span>
				)}
			</span>
			{statusEdit ? (
				<Btn onClick={() => saveName(dataInput)} className='btnWelcome'>
					<Image
						src={
							"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z'/%3E%3Cpath d='M8 12L11 15L16 10'/%3E%3C/g%3E%3C/svg%3E"
						}
						width={24}
						height={24}
						className='cursor-pointer changeCity'
						alt='temperature status'
					/>
				</Btn>
			) : (
				<Btn onClick={() => setStatusEdit(true)} className='btnWelcome'>
					<Image
						src={
							"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='white' d='M21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1m-15 .76V17a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .71-.29l6.92-6.93L21.71 8a1 1 0 0 0 0-1.42l-4.24-4.29a1 1 0 0 0-1.42 0l-2.82 2.83l-6.94 6.93a1 1 0 0 0-.29.71m10.76-8.35l2.83 2.83l-1.42 1.42l-2.83-2.83ZM8 13.17l5.93-5.93l2.83 2.83L10.83 16H8Z'/%3E%3C/svg%3E"
						}
						width={24}
						height={24}
						className='cursor-pointer changeCity'
						alt='temperature status'
					/>
				</Btn>
			)}
		</Wrapper>
	)
}

const Input = styled.input`
	min-width: 1.5em;
	max-width: 6em;
	display: block;
	background: 0;
	border: 0;
	border-bottom: 2px solid #fff;
	-webkit-border-radius: 0;
	outline: none;
	text-align: center;
	transition: border-color 0.2s ease;
	line-height: 1;
	&::placeholder {
		font-size: 34px;
	}
	@media (max-width: 1440px) {
		min-width: 1em;
		max-width: 5em;
		&::placeholder {
			font-size: 28px;
		}
	}
`
const TimeOfDay = styled.span`
	@media (max-width: 1440px) {
		font-size: 42px;
	}
`
const Wrapper = styled.div`
	opacity: 0;
	transition: all 0.2s ease;
	&:hover {
		.btnWelcome {
			opacity: 0.5;
		}
	}
	.btnWelcome {
		opacity: 0;
		transition: all 0.2s ease;
		max-height: 24px;
		&:hover {
			opacity: 1;
		}
	}
`
const Btn = styled.button``
export default Welcome
