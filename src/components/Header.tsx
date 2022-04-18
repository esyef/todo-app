import React from 'react'
import styled from '@emotion/styled'

type Props = {
	children: React.ReactNode
}

const HeaderS = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 2.5rem;
`

const Header = ({ children }: Props) => {
	return <HeaderS>{children}</HeaderS>
}

export default Header
