import { useContext } from 'react'
import { toast } from 'react-toastify'
import BackendAPIService from '../shared/api/service/BackendAPIService'
import { SearchContext } from '../shared/provider/SearchFileProvider'


export const useFileManagement: any = () => {
	const [setSearchResults] = useContext(SearchContext)

	const searchFiles = async (searchField: string) => {
		try {
			const { data } = await BackendAPIService.fuzzySearchFiles(searchField)
			setSearchResults(data)
			console.log(data)
		} catch (error) {
			console.log(error)
		}
	}

	const uploadFile = async (author: any, category: any, uploadedFile: any, subjects: any) => {
		try {
			BackendAPIService.uploadFile(author, category, uploadedFile, subjects),
			toast.success('File successfully uploaded')
		} catch (error) {
			console.log(error)
		}
	}

	const deleteFile = async (fileID: string) => {
		try {
			BackendAPIService.deleteFile(fileID)
			toast.success('Sucessfully removed file')
		} catch (error) {
			toast.error('Error occured while trying to delete file')
		}
	}

	return {
		searchFiles,
		uploadFile,
		deleteFile
	}
}
