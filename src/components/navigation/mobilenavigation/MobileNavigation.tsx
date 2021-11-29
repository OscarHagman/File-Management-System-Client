import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { HamburgerButton } from './components/hamburgerbutton/HamburgerButton'
import { fadeInRight } from 'shared/styles/animations/fadeInRight'
import { BackDrop } from '../../BackDrop'
import { SideBar } from './components/sidebar/SideBar'
import logotypeWhite from 'shared/images/codiclogotype_white.svg'
import RoutingPath from 'routes/RoutingPath'
import logotype from 'shared/images/codiclogotype.svg'
import styled from 'styled-components'

export const MobileNavigation: React.FC = (): JSX.Element => {
	const [showNavBar, setShowNavBar] = useState<boolean>(true)
	const [prevScrollPos, setPrevScrollPos] = useState<number>(0)
	const [openDrawer, setOpenDrawer] = useState<boolean>(false)
	const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
	const history = useNavigate()
	const location = useLocation()

	return (
		<Div>
			<HamburgerButton drawerHandler={setOpenDrawer} />
			{isCartOpen && <BackDrop drawerHandler={setIsCartOpen} />}
			{/* <Image src={location.pathname === RoutingPath.initialView ? logotype : logotypeWhite} onClick={() => history.push(RoutingPath.initialView)} /> */}
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

const Image = styled.img`
    cursor: pointer;
    width: 20%;
    animation: ${fadeInRight} 1000ms ease-in-out;
`