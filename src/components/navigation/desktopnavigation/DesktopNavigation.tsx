import { primaryColor, primaryFont } from 'shared/styles/GlobalStyles'
import { useNavigate } from 'react-router-dom'
import { Button } from 'components/Button'
import RoutingPath from 'routes/RoutingPath'
import styled from 'styled-components'
import neutral from 'shared/images/neutral.png'
import { floatingEffect } from 'shared/styles/animations/floatingEffect'


export const DesktopNavigation = () => {
	const navigate = useNavigate()

	return (
		<Wrapper>
			<ButtonPlacement>
				<Button text={'UPLOAD'} onClick={() => navigate(RoutingPath.uploadView)} />
			</ButtonPlacement>
			<Title>Codic Cloud</Title>
			<Image src={neutral} />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(10, 1fr);
`

const Title = styled.span`
	grid-column: 4/8;
	grid-row: 1/1;
	justify-self: center;
	align-self:center;
	font-family: ${primaryFont};
	color: ${primaryColor};
	font-size: 3rem;
`

const Image = styled.img`
	width: 80px;
	grid-column: 9/9;
	align-self:center;
	justify-self: center;
	animation-name: ${floatingEffect};
	animation-duration: 5s;
   animation-iteration-count: infinite;
   animation-timing-function: ease-in-out;
`

const ButtonPlacement = styled.div`
	grid-column: 1/3;
	justify-self: center;
	align-self:center;
`