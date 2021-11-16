import styled from 'styled-components'
import { SearchHandler } from '../../components/SearchHandler'
import { UploadHandler } from '../../components/UploadHandler'

export const FileView = () => {
	return (
		<Wrapper>
			<h1>Codic File Management System</h1>
			<UploadHandler />
			<SearchHandler />
		</Wrapper>
	)
}

const Wrapper = styled.div`
   background-color: orange;
   width: 100%;
   height: 100vh;
`
