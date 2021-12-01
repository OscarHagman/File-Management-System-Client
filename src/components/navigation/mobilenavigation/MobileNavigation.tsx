import React, { useState } from 'react'
import { HamburgerButton } from './components/hamburgerbutton/HamburgerButton'
import { BackDrop } from '../../BackDrop'
import { SideBar } from './components/sidebar/SideBar'
import styled from 'styled-components'

export const MobileNavigation: React.FC = (): JSX.Element => {
	const [openDrawer, setOpenDrawer] = useState<boolean>(false)
	const [isCartOpen, setIsCartOpen] = useState<boolean>(false)

	return (
		<Div>
			<HamburgerButton drawerHandler={setOpenDrawer} />
			{isCartOpen && <BackDrop drawerHandler={setIsCartOpen} />}
			<SideBar drawerIsOpen={openDrawer} drawerHandler={setOpenDrawer} setIsCartOpen={setIsCartOpen} />
			{openDrawer && <BackDrop drawerHandler={setOpenDrawer} />}
		</Div>
	)
}

const Div = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 4%;
	background-color: ${props => props.theme.bColor};
	position: sticky;
	top: ${props => props.theme.top};
	width: 100%;
	vertical-align: middle;
	z-index:1000;
	transition: top 0.6s;
`