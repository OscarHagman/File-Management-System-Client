import { SearchFileProvider } from './shared/provider/SearchFileProvider'
import { GlobalStyles } from './shared/styles/GlobalStyles'
import { ToastifyConfigurations } from './shared/configurations/ToastifyConfigurations'
import { Routing } from './routes/Routing'
import { Navigation } from 'components/navigation/Navigation'

export const App = () => {
	return (
		<>
			<GlobalStyles />
			<ToastifyConfigurations />
			<SearchFileProvider>
				<Routing>
					<Navigation />
				</Routing>
			</SearchFileProvider>
		</>
	)
}