import React, { useContext } from 'react'
import { ThemeContext, ThemeCtx } from './context/ThemeContext'
import styled from '@emotion/styled'
import useThemed from './hooks/useThemed'
import ToogleTheme from './components/ToogleTheme'
import { imagesSource } from './assets/images/images'
import { iconsSource } from './assets/icons'
import Header from './components/Header'
import CreateTodo from './components/CreateTodo'

interface AppContainerProps {
	currentTheme: string
}

const AppContainer = styled.div<AppContainerProps>`
	background-color: ${props =>
		props.currentTheme === 'light' ? '#FAFAFA' : '#171823'};
	transition: all 0.2s ease-in-out;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: top center;
	${props =>
		props.currentTheme === 'light'
			? `background-image: url(${imagesSource.MobileLight});`
			: `background-image: url(${imagesSource.MobileDark});`}

	@media (min-width: 60rem) {
		& {
			${props =>
				props.currentTheme === 'light'
					? `background-image: url(${imagesSource.DesktopLight});`
					: `background-image: url(${imagesSource.DesktopDark});`}
		}
	}
`

const Wrapper = styled.div`
	width: 90%;
	max-width: 540px;
	margin: 0 auto;
	padding-block: 48px 72px;
`

function App() {
	const { theme } = useContext(ThemeCtx)

	const { currentTheme, toggleTheme } = useThemed({ currentThemed: theme })

	console.log(currentTheme)
	return (
		<ThemeContext>
			<AppContainer currentTheme={currentTheme}>
				<Wrapper>
					<Header>
						<img src={iconsSource.logo} alt='logo' />
						<ToogleTheme toggle={toggleTheme} currentTheme={currentTheme} />
					</Header>

					<CreateTodo currentTheme={currentTheme} />
				</Wrapper>
			</AppContainer>
		</ThemeContext>
	)
}

export default App
