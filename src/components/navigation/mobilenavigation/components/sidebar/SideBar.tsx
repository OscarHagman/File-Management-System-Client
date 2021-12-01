import styled from 'styled-components'

export const SideBar = (props: { drawerIsOpen: boolean, drawerHandler: (handler: boolean) => void, setIsCartOpen: (value: boolean) => void, }): JSX.Element => {

	return (
		<Drawer isOpen={props.drawerIsOpen}>
			<h1>{'lols'}</h1>
		</Drawer>
	)
}

interface values {
	isOpen: boolean;
}

const Drawer = styled.nav<values>`
	height: 100%;
	background: white;
	box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	width: 70%;
	max-width: 270px;
	z-index: 200;
	transform: translateX(-100%);
	transition: transform 0.3s ease-in-out;
	transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100)'}
`