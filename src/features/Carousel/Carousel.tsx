import { A11y, EffectFade, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import useChangeList from './hook/useChangeList'
import Layout from '@/layout/Layout'

const Carousel = () => {
	const [bgNum, _] = useState(Math.floor(Math.random() * (20 - 1 + 1)) + 1)
	const { finallyList } = useChangeList()
	const [timeOfDay, setTimeOfDay] = useState('')
	const timeOfDays = ['evening', 'afternoon', 'morning', 'night']

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

	return (
		<div className='h-screen relative z-[1]'>
			<Swiper
				className='h-full'
				modules={[Navigation, A11y, EffectFade]}
				effect='fade'
				slidesPerView={1}
				navigation
				loop={true}
				onSwiper={swiper => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
			>
				<Layout />
				{finallyList(bgNum).map((img: any) => {
					return (
							<SwiperSlide key={img}>
								<Image
									alt='slide'
									className='select-none'
									quality={100}
									fill
									sizes='100vw'
									src={`/images/${timeOfDay}/${img}.webp`}
									style={{ objectFit: 'cover' }}
								/>
							</SwiperSlide>
					)
				})}
			</Swiper>
		</div>
	)
}

export default Carousel
