import Axios from 'axios'
import Constants from '../global/Constants'


const BackendAPI = Axios.create({
	baseURL: Constants.URLs.baseURL_PROD,
})

export default BackendAPI
