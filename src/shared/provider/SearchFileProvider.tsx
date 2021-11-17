import { useState, createContext } from 'react'

export const SearchContext = createContext<any>(null)

export const SearchFileProvider = (props: { children?: any }) => {
	const [searchResults, setSearchResults] = useState(undefined)
	const { children } = props

	return (
		<SearchContext.Provider value={[searchResults, setSearchResults]}>
			{children}
		</SearchContext.Provider>
	)
}