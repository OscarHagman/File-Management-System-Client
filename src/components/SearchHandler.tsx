import { useContext, useEffect, useState } from 'react'
import { useFileManagement } from '../hooks/useFileManagement'
import { SearchContext } from '../shared/provider/SearchFileProvider'
import { useDebounce } from '../hooks/useDebounce'
import FieldInput from './inputs/Field.Input'
import FileCardList from './file-cards/File.Card.List'

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
			<FieldInput text="Search for files"
				searchChange={(e: React.FormEvent<HTMLInputElement>) => setSearchField(e.currentTarget.value.toLocaleLowerCase())} />
			{isSearching ? <h1>Searching..</h1> : <FileCardList files={searchResults} />}
		</>
	)
}
