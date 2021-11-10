import BackendAPIService from '../shared/api/service/BackendAPIService'

export const useFileManagement = () => {
	const searchFiles = async () => {
		// try {
		// 	const response: any = await BackendAPIService.fuzzySearchFiles(searchField)
		// 	console.log(response)
		// } catch (error) {
		// 	console.log(error)
		// }
        console.log("Searched Files")
	}

	return (
		searchFiles
	)
}