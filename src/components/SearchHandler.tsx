import { useContext, useEffect, useState } from 'react'
import { useFileManagement } from '../hooks/useFileManagement'
import { SearchContext } from '../shared/provider/SearchFileProvider'
import { useDebounce } from '../hooks/useDebounce'
import { FileCardList } from './file-cards/File.Card.List'
import FieldInput from './inputs/Field.Input'
import styled from 'styled-components'

export const SearchHandler = () => {
	const [searchResults, setSearchResults] = useContext(SearchContext)
	const [searchField, setSearchField] = useState<string>('')
	const [isSearching, setIsSearching] = useState(false)
	const { searchFiles } = useFileManagement()
	const debouncedSearchTerm = useDebounce(searchField, 500)

	const startSearch = () => {
		setIsSearching(true)
		if (debouncedSearchTerm) {
			try {
				searchFiles(searchField)
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
					onChange={(e: React.FormEvent<HTMLInputElement>) => setSearchField(e.currentTarget.value.toLocaleLowerCase())} />
			</Wrapper>
			{isSearching ? <h1>Searching..</h1> : <FileCardList files={searchResults} />}
		</>
	)
}

const Wrapper = styled.div`
text-align: center;
`

const Input = styled.input`
width: 500px;
`
