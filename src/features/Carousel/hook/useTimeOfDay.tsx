import {useState} from 'react';

const useTimeOfDay = () => {
	const [timeOfDayState, setTimeOfDayState] = useState(0)
	const time = ['evening', 'afternoon', 'morning', 'night']

	function initTime(){

	}

	function timeOfDay() {
		return time[timeOfDayState]
	}
	
	return {
		timeOfDay
	};
};

export default useTimeOfDay;