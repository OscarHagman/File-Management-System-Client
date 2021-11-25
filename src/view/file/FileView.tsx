import { useContext, useState } from 'react'
import styled from 'styled-components'
import { SearchHandler } from '../../components/SearchHandler'
import { UploadHandler } from '../../components/UploadHandler'
import { SearchContext } from '../../shared/provider/SearchFileProvider'
import { primaryColor, primaryFont } from '../../shared/styles/GlobalStyles'
import neutral from '../../shared/images/neutral.png'
import happy from '../../shared/images/happy.png'
import sad from '../../shared/images/sad.png'
import { fadeInOpacity } from '../../shared/styles/animations/fadeInOpacity'

export const FileView = () => {
	const [searchResults] = useContext(SearchContext)
	const [searchField, setSearchField] = useState<string>('')

	const determineCloud = () => {
		if (searchField && searchResults?.length != 0) {
			return <Image src={happy} />
		}
		else if (searchResults?.length == 0 && searchField) {
			return <Image src={sad} />
		} else {
			return <Image src={neutral} />
		}
	}

	return (
		<Wrapper>
			<UploadPlacement>
				<UploadHandler />
			</UploadPlacement>
			<Title>Codic Cloud {determineCloud()}</Title>
			<Div>
				<SearchHandler searchField={searchField} setSearchField={setSearchField} />
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

const Image = styled.img`
	width: 70px;
	padding: 2%;	
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