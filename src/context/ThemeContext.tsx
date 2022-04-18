import React, { createContext } from 'react'

interface ThemeContextInterface {
	theme: string
}

export const ThemeCtx = createContext<ThemeContextInterface>({
	theme: 'light',
})

type Props = {
	children: React.ReactNode
}

export const ThemeContext = ({ children }: Props) => (
	<ThemeCtx.Provider
		value={{
			theme: 'light',
		}}>
		{children}
	</ThemeCtx.Provider>
)
