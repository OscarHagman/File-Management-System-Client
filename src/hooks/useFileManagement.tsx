import BackendAPIService from '../shared/api/service/BackendAPIService'


export const useFileManagement = () => {
	const x: (searchField: string) => Promise<void> = async (searchField: string) => {
		try {
			const response = await BackendAPIService.fuzzySearchFiles(searchField)
			console.log(response)
		} catch (error) {
			console.log(error)
		}
        console.log("Searched Files")
	}

	return (
		x
	)
}