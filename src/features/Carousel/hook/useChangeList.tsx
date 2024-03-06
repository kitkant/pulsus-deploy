
import React from 'react';

const useChangeList = () => {
	const bgQueue = {
		queue: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],
		enqueueEnd: function (item : any) {
			this.queue.push(item)
		},
		dequeueStart: function () {
			return this.queue.shift()
		},
		enqueueStart: function (item : any) {
			this.queue.unshift(item)
		},
		dequeueEnd: function () {
			return this.queue.pop()
		},
		revers: function (number : any) {
			let item
			if (this.queue[0] !== number) {
				item = this.dequeueStart()
				this.enqueueEnd(item)
				this.revers(number)
			}
		},
	}
	function finallyList(bgNum : any) {
		bgQueue.revers(bgNum)
		return bgQueue.queue

	}

	return {
		finallyList
	}
};

export default useChangeList;