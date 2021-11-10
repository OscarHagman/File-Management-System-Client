import Axios from 'axios'
import Constants from '../global/Constants'


const BackendAPI = Axios.create({
	baseURL: Constants.URLs.baseURL,
})

export default BackendAPI