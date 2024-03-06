import ButtonSound from '@/features/ButtonSound/ButtonSound'
import DateNow from '@/features/DateNow/DateNow'
import Quotes from '@/features/Quotes/Quotes'
import Timer from '@/features/Timer/Timer'
import Weather from '@/features/Weather/Weather'
import Welcome from '@/features/Welcome/Welcome'
import styled from '@emotion/styled'

const Layout = () => {
	console.log('render layout')
	return (
		<Wrapper className='absolute top-0 w-full h-full layout flex-col flex justify-between'>
			<FlexHeader className='w-full flex'>
				<Weather />
			</FlexHeader>
			<FlexMiddle className='flex flex-col'>
				<Timer />
				<DateNow />
				<Welcome />
			</FlexMiddle>
			<FlexBottom className='w-full flex justify-center'>
				<Quotes />
				<ButtonSound />
			</FlexBottom>
		</Wrapper>
	)
}

const FlexHeader = styled.div`
	justify-content: end;
`
const Wrapper = styled.div`
	padding: 1rem;
`
const FlexMiddle = styled.div`
	align-items: center;
`
const FlexBottom = styled.div`
	height: 150px;
	align-items: end;
`
export default Layout
