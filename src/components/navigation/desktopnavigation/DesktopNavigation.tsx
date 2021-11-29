import { Button } from 'components/Button'
import { useNavigate } from 'react-router-dom'
import RoutingPath from 'routes/RoutingPath'

export const DesktopNavigation = () => {
	const navigate = useNavigate()

	return (
		<div>
			<Button text={'UPLOAD'} onClick={() => navigate(RoutingPath.uploadView)} />
		</div>
	)
}