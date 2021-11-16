import { useContext } from 'react'
import BackendAPIService from '../shared/api/service/BackendAPIService'
import { SearchContext } from '../shared/provider/SearchFileProvider'


export const useFileManagement: any = () => {
	const [searchResults, setSearchResults] = useContext(SearchContext)

	const searchFiles = async (searchField: string) => {
		try {
			const { data } = await BackendAPIService.fuzzySearchFiles(searchField)
			setSearchResults(data)
		} catch (error) {
			console.log(error)
		}
		console.log("Searched Files")
	}

	return {
		searchFiles
	}
}
