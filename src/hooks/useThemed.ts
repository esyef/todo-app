import { useState } from 'react'

type Props = {
	currentThemed: string
}

const useThemed = ({ currentThemed }: Props) => {
	const [currentTheme, setCurrentTheme] = useState<string>(
		localStorage.getItem('theme') ?? 'light'
	)

	const toggleTheme = () => {
		if (currentTheme === 'light') {
			setCurrentTheme('dark')
		} else {
			setCurrentTheme('light')
		}
	}

	const SaveThemeLs = () => localStorage.setItem('theme', currentTheme)
	SaveThemeLs()

	return { currentTheme, toggleTheme }
}

export default useThemed
