import styled from '@emotion/styled'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { WeatherAPI } from './../../api/WeatherData'
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
} from '@nextui-org/react'
import Cookies from 'universal-cookie'
import gsap from 'gsap'
import localFont from 'next/font/local'

const myFont = localFont({ src: '../../pages/fonts/gilroy-regular.ttf' })

const Weather = () => {
	const [data, setData]: any = useState(null)
	const [isLoading, setLoading] = useState(true)
	const [dataInput, setDataInput] = useState('')
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [dataError, setDataError] = useState(false)
	const cookies = new Cookies(null, { path: '/' })

	useEffect(() => {
		WeatherAPI.getWeather(cookies.get('weatherCity'))
			.then((data): any => {
				setData(data.data)
				setLoading(false)
			})
			.catch((error): any => {
				// console.log(error)
			})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		gsap.to('.weather', { opacity: '1', duration: 3, delay: 3 })
	}, [data])

	// useGSAP(() => {
	// 	gsap.to('.weather', { opacity: '1', duration: 3 })
	// })

	const changeCity = (event: any) => {
		setDataInput(event.target.value)
		setDataError(false)
	}

	const closeModal = () => {
		setDataError(false)
		setDataInput('')
		onClose()
	}

	const closeModalKey = (e: any) => {
		if (e.code === 'Enter') getCityWeather()
		if (e.code !== 'Escape') return
		setDataError(false)
		setDataInput('')
		onClose()
	}

	const getCityWeather = () => {
		WeatherAPI.getWeather(dataInput)
			.then((data): any => {
				setData(data.data)
				setLoading(false)
				onClose()
				setDataError(false)
				setDataInput('')
				cookies.set('weatherCity', data.data.location.name)
			})
			.catch((error): any => {
				// console.log(error)
				setDataError(true)
			})
	}

	if (isLoading) return <p>Loading...</p>
	if (!data) return <p>No location</p>

	return (
		<>
			<WeatherWrapper className='weather'>
				<button className='cursor-pointer changeCity' onClick={onOpen}>
					<Image
						src={
							"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='m20.35 8.923l-.366-.204a2 2 0 0 1-.784-.724c-.017-.027-.033-.056-.065-.112a2.002 2.002 0 0 1-.3-1.157l.006-.425c.012-.68.018-1.022-.078-1.328a1.998 1.998 0 0 0-.417-.736c-.214-.24-.511-.412-1.106-.754l-.494-.285c-.592-.341-.889-.512-1.204-.577a1.999 1.999 0 0 0-.843.007c-.313.07-.606.246-1.191.596l-.003.002l-.354.211c-.056.034-.085.05-.113.066c-.278.155-.588.24-.907.25c-.032.002-.065.002-.13.002l-.13-.001a1.997 1.997 0 0 1-.91-.252c-.028-.015-.055-.032-.111-.066l-.357-.214c-.589-.354-.884-.53-1.199-.601a1.998 1.998 0 0 0-.846-.006c-.316.066-.612.238-1.205.582l-.003.001l-.488.283l-.005.004c-.588.34-.883.512-1.095.751a2 2 0 0 0-.415.734c-.095.307-.09.649-.078 1.333l.007.424c0 .065.003.097.002.128a2.002 2.002 0 0 1-.301 1.027c-.033.056-.048.084-.065.11a2 2 0 0 1-.675.664l-.112.063l-.361.2c-.602.333-.903.5-1.121.738a2 2 0 0 0-.43.73c-.1.307-.1.65-.099 1.338l.002.563c.001.683.003 1.024.104 1.329a2 2 0 0 0 .427.726c.218.236.516.402 1.113.734l.358.199c.061.034.092.05.121.068a2 2 0 0 1 .74.781l.067.12a2 2 0 0 1 .23 1.038l-.007.407c-.012.686-.017 1.03.079 1.337c.085.272.227.523.417.736c.214.24.512.411 1.106.754l.494.285c.593.341.889.512 1.204.577a2 2 0 0 0 .843-.007c.314-.07.607-.246 1.194-.598l.354-.212a1.997 1.997 0 0 1 1.02-.317h.26c.318.01.63.097.91.252l.092.055l.376.226c.59.354.884.53 1.199.6a2 2 0 0 0 .846.008c.315-.066.613-.239 1.206-.583l.495-.287c.588-.342.883-.513 1.095-.752c.19-.213.33-.463.415-.734c.095-.305.09-.644.078-1.318l-.008-.44a2 2 0 0 1 .3-1.155l.065-.11a2 2 0 0 1 .675-.664l.11-.061l.002-.001l.361-.2c.602-.334.903-.5 1.122-.738c.194-.21.34-.46.429-.73c.1-.305.1-.647.098-1.327l-.002-.574c-.001-.683-.002-1.025-.103-1.33a2.002 2.002 0 0 0-.428-.725c-.217-.236-.515-.402-1.111-.733z'/%3E%3Cpath d='M8 12a4 4 0 1 0 8 0a4 4 0 0 0-8 0'/%3E%3C/g%3E%3C/svg%3E"
						}
						width={24}
						height={24}
						alt='temperature status'
					/>
				</button>
				<div className='flex items-center flex-col pt-[7px] select-none'>
					<Span>{data.location.name}</Span>
					<div className='flex '>
						<Image
							src={`https:${data.current.condition.icon}`}
							width={48}
							height={48}
							alt='temperature status'
						/>
						<Temperature className=''>
							{Math.round(data.current.temp_c)}&#8451;
						</Temperature>
					</div>
					<Span className='max-w-[220px] leading-none'>
						{data.current.condition.text}
					</Span>
				</div>
			</WeatherWrapper>
			<Modal
				size={'xl'}
				isOpen={isOpen}
				onClose={closeModal}
				onKeyDown={closeModalKey}
				className={myFont.className + ' ' + 'bg-[#18181b]'}
			>
				<ModalContent>
					{(onClose: any) => (
						<>
							<ModalHeader className='flex flex-col gap-1'>
								Change city
							</ModalHeader>
							<ModalBody>
								<WeatherInput
									value={dataInput}
									onChange={changeCity}
									placeholder='Type a location'
								></WeatherInput>
								{dataError && (
									<ErrorMessage>No matching location found.</ErrorMessage>
								)}
							</ModalBody>
							<ModalFooter>
								<Button color='danger' variant='light' onPress={closeModal}>
									Close
								</Button>
								<Button color='primary' onPress={getCityWeather}>
									Action
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}

const Temperature = styled.div`
	font-size: 1.625rem;
	display: flex;
	align-items: center;
	font-weight: 400;
	letter-spacing: 0px;
	@media (max-width: 1440px) {
		font-size: 24px;
	}
`
const Span = styled.span`
	@media (max-width: 1440px) {
		font-size: 14px;
	}
`
const WeatherInput = styled.input`
	width: 100%;
	display: block;
	font-size: 1.2rem;
	background: 0;
	border: 0;
	border-bottom: 2px solid #fff;
	-webkit-border-radius: 0;
	outline: none;
	text-align: center;
	transition: border-color 0.2s ease;
`
const WeatherWrapper = styled.div`
	opacity: 0;
	display: flex;
	align-items: start;
	flex-wrap: 10px;
	color: rgba(255, 255, 255, 0.85);
	letter-spacing: 3px;
	line-height: 0.6;
	gap: 10px;

	&:hover {
		color: rgba(255, 255, 255, 1);
		.changeCity {
			opacity: 0.5;
		}
	}
	.changeCity {
		opacity: 0;
		transition: all 0.2s ease;
		&:hover {
			opacity: 1;
		}
	}
	transition: all 0.2s ease;
`
const ErrorMessage = styled.span`
	color: red;
`

export default Weather
