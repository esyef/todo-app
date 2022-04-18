import React from 'react'
import styled from '@emotion/styled'

type Props = {
	currentTheme: string
}

interface StyleProps {
	theme: string
}

const Input = styled.input<StyleProps>`
	padding-block: 20px;
	padding-left: 24px;
	border-radius: 5px;
	background: ${props => (props.theme === 'light' ? '#FFF' : '#25273D')};
	${props =>
		props.theme === 'light'
			? 'box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5)'
			: 'box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5)'};

	width: 100%;
	border: none;
	outline: none;
	color: ${props => (props.theme === 'light' ? '#494C6B' : '#C8CBE7')};

	&::placeholder {
		color: ${props => (props.theme === 'light' ? '#9495A5' : '#767992')};
	}
`

const CreateTodo = ({ currentTheme }: Props) => {
	return (
		<form>
			<Input type='text' placeholder='Create a new todo' theme={currentTheme} />
		</form>
	)
}

export default CreateTodo
