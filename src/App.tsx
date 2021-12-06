import { ToastifyConfigurations } from './shared/configurations/ToastifyConfigurations'
import { SearchFileProvider } from './shared/provider/SearchFileProvider'
import { ScrollBarStyle } from 'shared/styles/ScrollBarStyle'
import { GlobalStyles } from './shared/styles/GlobalStyles'
import { Navigation } from 'components/navigation/Navigation'
import { Routing } from './routes/Routing'

export const App = () => {
	return (
		<>
			<GlobalStyles />
			<ScrollBarStyle />
			<ToastifyConfigurations />
			<SearchFileProvider>
				<Routing>
					<Navigation />
				</Routing>
			</SearchFileProvider>
		</>
	)
}