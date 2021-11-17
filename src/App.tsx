import { SearchFileProvider } from './shared/provider/SearchFileProvider'
import { FileView } from './view/file/FileView'
import { GlobalStyles } from './shared/styles/GlobalStyles'
import { ToastifyConfigurations } from './shared/configurations/ToastifyConfigurations'

export const App = () => {
	return (
		<>
			<GlobalStyles />
			<ToastifyConfigurations />
			<SearchFileProvider>
				<FileView />
			</SearchFileProvider>
		</>
	)
}