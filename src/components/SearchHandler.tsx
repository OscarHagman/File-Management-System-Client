import { useContext, useEffect, useState } from 'react'
import { useFileManagement } from '../hooks/useFileManagement'
import { SearchContext } from '../shared/provider/SearchFileProvider'
import { useDebounce } from '../hooks/useDebounce'
import { FileCardList } from './file-cards/File.Card.List'
import styled from 'styled-components'

export const SearchHandler = (props: { searchField: any, setSearchField: any }) => {
	const [searchResults, setSearchResults] = useContext(SearchContext)
	/* const [searchField, setSearchField] = useState<string>('') */
	const [isSearching, setIsSearching] = useState(false)
	const { searchFiles } = useFileManagement()
	const debouncedSearchTerm = useDebounce(props.searchField, 500)

	const startSearch = () => {
		setIsSearching(true)
		if (debouncedSearchTerm) {
			try {
				searchFiles(props.searchField)
				setIsSearching(false)
			} catch (error) {
				setSearchResults([])
				setIsSearching(false)
			}
		} else {
			setSearchResults([])
			setIsSearching(false)
		}
	}

	useEffect(() => {
		startSearch()
	}, [debouncedSearchTerm])

	return (
		<>
			<Wrapper>
				<Input placeholder={'Search for files..'}
					onChange={(e: React.FormEvent<HTMLInputElement>) => props.setSearchField(e.currentTarget.value.toLocaleLowerCase())} />
			</Wrapper>
			{isSearching ? <h1>Searching..</h1> : <FileCardList files={searchResults} searchTerm={props.searchField} />}
		</>
	)
}

const Wrapper = styled.div`
text-align: center;
`

const Input = styled.input`
width: 500px;
`
