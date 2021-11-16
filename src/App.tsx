import { SearchFileProvider } from './shared/provider/SearchFileProvider'
import { SearchHandler } from './components/SearchHandler'
import { UploadHandler } from './components/UploadHandler'

export const App = () => {
	/* 	const [searchResult, setSearchResult] = useState<any>()
	
		const deleteFileFromResult = (fileId: string) => {
			for (let i = 0; i < searchResult.length; i++) {
				if (searchResult[i]._id === fileId) {
					const updatedResult = searchResult
					delete updatedResult[i]
					setSearchResult(updatedResult.filter((n: any) => n))
				}
			}
		} */

	return (
		<SearchFileProvider>
			<h1>Codic File Management System</h1>
			<UploadHandler />
			<SearchHandler />
		</SearchFileProvider>
	)
}