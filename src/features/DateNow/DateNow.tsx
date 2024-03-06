import React, { useState } from 'react'

const DateNow = () => {
	const now = new Date()
	const [date, setDate] = useState(now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }))

	setInterval(() => {
		const now = new Date()
		if (
			now.getHours() === 0 &&
			date !== now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
		)
			setDate(now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }))
	}, 1000)

	return <span className='text-4xl'>{date}</span>
}

export default DateNow
