import React from 'react'
import { LoaderCon } from './loaderStyle'


const Loader = () => {
	return (
		<LoaderCon className='bg-[#111010] z-50 absolute inset-0 flex justify-center items-center'>
			<svg viewBox='0 0 400 160' className='w-96 font-bold -tracking-6'>
				<text
					x={'50%'}
					y={'50%'}
					dy={'.32em'}
					textAnchor='middle'
					className='stroke-[#fff] stroke-2 text-7xl animate-[animateStroke_4s_infinite_alternate]'
				>
					Pulsus
				</text>
				<text
					x={'50%'}
					y={'50%'}
					dy={'.32em'}
					dx={'1.5em'}
					textAnchor='middle'
					className='stroke-[#fff] fill-white stroke-2 text-7xl animate-[animateDot_4s_infinite_alternate]'
				>
					.
				</text>
			</svg>
		</LoaderCon>
	)
}

export default Loader
