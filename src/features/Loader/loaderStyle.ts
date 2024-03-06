import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'


const invisible = keyframes`
  0%{
		opacity: 1;
	}
	100%{
		opacity: 0;
	}
`


export const LoaderCon = styled.button`
		cursor: auto;
		animation: ${invisible} 2s ease;
		animation-delay: 4s;
`