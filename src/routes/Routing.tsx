import { HashRouter, Routes as Switch, Route } from 'react-router-dom'
import { FileSearchView } from 'view/filesearch/FileSearchView'
import { FileUploadView } from 'view/fileupload/FileUploadView'
import RoutingPath from './RoutingPath'

export const Routing = (props: { children: React.ReactChild }) => {
	return (
		<HashRouter>
			{props.children}
			<Switch>
				<Route path={RoutingPath.uploadView} element={<FileUploadView />} />
				<Route path={'/*'} element={<FileSearchView />} />
			</Switch>
		</HashRouter>
	)
}
