import styled from 'styled-components'
import { SearchHandler } from '../../components/SearchHandler'
import { UploadHandler } from '../../components/UploadHandler'
import { primaryColor, primaryFont } from '../../shared/styles/GlobalStyles'

export const FileView = () => {
	return (
		<Wrapper>
			<UploadPlacement>
				<UploadHandler />
			</UploadPlacement>
			<Title>Codic Cloud ☁️</Title>
			<Div>
				<SearchHandler />
			</Div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
   background-color: #edebe7;
   width: 100%;
   height: 100vh;
	display: grid;
	grid-template-columns: repeat(10, 1fr);
	grid-template-rows: repeat(10, 1fr);
`

const Title = styled.span`
	grid-column: 1/11;
	grid-row: 1/1;
	justify-self: center;
	font-family: ${primaryFont};
	color: ${primaryColor};
	font-size: 3rem;
`

const UploadPlacement = styled.div`
	position: absolute;
`

const Div = styled.div`
	grid-column: 1/11;
	grid-row: 1/1;
	justify-self: center;
	margin-top: 5%;
`