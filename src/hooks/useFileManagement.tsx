import { useContext } from 'react'
import { toast } from 'react-toastify'
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
	}

	const uploadFile = async (author: any, category: any, uploadedFile: any) => {
		try {
			BackendAPIService.uploadFile(author, category, uploadedFile)
			toast.success('File successfully uploaded')
		} catch (error) {
			console.log(error)
		}
	}

	const deleteFile = async (fileID: string) => {
		try {
			BackendAPIService.deleteFile(fileID)
			console.log('REMOVED FILE')
		} catch (error) {
			console.log(error)
			console.log('COULD NOT REMOVE FILE')
		}
	}

	return {
		searchFiles,
		uploadFile,
		deleteFile
	}
}
