import { useState } from 'react'
import { SearchHandler } from 'components/SearchHandler'
import styled from 'styled-components'

export const FileSearchView = () => {
	const [searchField, setSearchField] = useState<string>('')

	return (
		<Wrapper>
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

const Div = styled.div`
	grid-column: 1/11;
	grid-row: 1/1;
	justify-self: center;
	margin-top: 5%;
`