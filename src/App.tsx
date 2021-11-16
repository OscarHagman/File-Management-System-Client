import { SearchFileProvider } from './shared/provider/SearchFileProvider'
import { SearchHandler } from './components/SearchHandler'
import { UploadHandler } from './components/UploadHandler'

export const App = () => {
	return (
		<SearchFileProvider>
			<h1>Codic File Management System</h1>
			<UploadHandler />
			<SearchHandler />
		</SearchFileProvider>
	)
}