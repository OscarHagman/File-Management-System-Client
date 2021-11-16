import { SearchFileProvider } from './shared/provider/SearchFileProvider'
import { FileView } from './view/file/FileView'
import { GlobalStyles } from './shared/styles/GlobalStyles'

export const App = () => {
	return (
		<>
			<GlobalStyles />
			<SearchFileProvider>
				<FileView />
			</SearchFileProvider>
		</>
	)
}