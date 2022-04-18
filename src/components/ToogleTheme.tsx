import React from 'react'
import styled from '@emotion/styled'
import { iconsSource } from '../assets/icons'

const Button = styled.button`
	background-color: transparent;
	border: none;
	outline: none;
	margin: 0;
	padding: 0;
`

type Props = {
	currentTheme: string
	toggle(event: React.MouseEvent<HTMLButtonElement>): void
}

const ToogleTheme = ({ currentTheme, toggle }: Props) => {
	return (
		<Button onClick={toggle} type='button'>
			<img
				src={`${
					currentTheme === 'light'
						? iconsSource.IconDark
						: iconsSource.Iconlight
				}`}
				alt='icons'
			/>
		</Button>
	)
}

export default ToogleTheme
