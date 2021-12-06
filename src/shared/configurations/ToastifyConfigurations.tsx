import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ToastifyConfigurations = () => {
	return (
		<ToastContainer
			position='bottom-left'
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={true}
			closeOnClick={true}
			rtl={false}
			pauseOnFocusLoss={true}
			draggable={true}
			pauseOnHover={true} />
	)
}
