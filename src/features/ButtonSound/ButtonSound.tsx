import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { useState } from 'react'
import useSound from 'use-sound'

const ButtonSound = () => {
	const [playToggle, setPlayToggle] = useState(false)
	const [play, { stop }] = useSound('/sound/song.mp3', {
		volume: 0.2,
		interrupt: true,
	})

	const playMusic = () => {
		if (playToggle) {
			stop()
		} else {
			play()
			setTimeout(() => {
				stop()
				setPlayToggle(false)
			}, 136000)
		}
		setPlayToggle(!playToggle)
	}
	return (
		<div>
			<Button onClick={playMusic}>
				<SpanUi className={playToggle ? 'play' : ''}></SpanUi>
			</Button>
		</div>
	)
}

const u9ac5278f = keyframes`
  0% {
    -webkit-transform: translate(-50%, -50%) scale(0);
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  100% {
		-webkit-transform: translate(-50%, -50%) scale(1);
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }

`

const Button = styled.button`
	position: fixed;
	right: 45px;
	bottom: 35px;
	height: 30px;
	width: 30px;
	z-index: 989;
	border: 0 none;
	outline: none;
	background: transparent;
	cursor: pointer;
	pointer-events: all;
	&::before{
		content: "";
			background-color: #fff;
		position: absolute;
			top: 50%;
			left: 50%;
			height: 6px;
			width: 6px;
			-webkit-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
			border-radius: 50%;
	}
	.play {
		opacity: 1;
	}
}`

const SpanUi = styled.span`
	transition: opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	opacity: 0;
	&:before {
		position: absolute;
		top: 50%;
		left: 50%;
		height: 30px;
		width: 30px;
		content: '';
		z-index: -1;
		-webkit-transform: translate(-50%, -50%) scale(0);
		transform: translate(-50%, -50%) scale(0);
		-webkit-animation: 1.6s linear infinite;
		animation: 1.6s linear infinite;
		border: 2px solid #fff;
		border-radius: 50%;
		-webkit-animation-name: ${u9ac5278f};
		animation-name: ${u9ac5278f};
		-webkit-animation-delay: 0.5s;
		animation-delay: 0.5s;
	}
	&:after {
		position: absolute;
		top: 50%;
		left: 50%;
		height: 30px;
		width: 30px;
		content: '';
		z-index: -1;
		-webkit-transform: translate(-50%, -50%) scale(0);
		transform: translate(-50%, -50%) scale(0);
		-webkit-animation: 1.6s linear infinite;
		animation: 1.6s linear infinite;
		border: 2px solid #fff;
		border-radius: 50%;
		-webkit-animation-name: ${u9ac5278f};
		animation-name: ${u9ac5278f};
	}
`

export default ButtonSound
