import Axios from 'axios'
import Constants from '../global/Constants'
const {TITLE, AUTHOR, CATEGORY, FILE} = Constants.Fields


const http = Axios.create({
    baseURL: Constants.URLs.baseURL,
})

const uploadFile = async (author: string, category: string, file: any) => {
    const formData = new FormData()
    formData.append(TITLE, file.name)
    formData.append(AUTHOR, author)
    formData.append(CATEGORY, category)
    formData.append(FILE, file)

    const config = {
        headers: {"content-type": "multipart/form-data"}
    }

    return http.post("/upload-file", formData, config)
}

const downloadFile = (fileId: number): object => {
    return http.post(`/download/${fileId}`)
}

const fuzzySearchFiles = async (searchField: string) => {
    return await http.get("/fuzzy-search", {params: {search: searchField}})
}

const getAllFiles = (): object => {
    return http.get("/get-files")
}

const getAllFilesByCategory = (): object => {
    return http.get("/get-files/category")
}

const getAllFilesByTitle = (): object => {
    return http.get("/get-files/title")
}

const updateFile = (fileId: number): object => {
    return http.put(`/update-file/${fileId}`)
}

const deleteFile = (fileId: number): object => {
    return http.delete(`/delete-file/${fileId}`)
}

export {
    uploadFile,
    downloadFile,
    fuzzySearchFiles,
    getAllFiles,
    getAllFilesByCategory,
    getAllFilesByTitle,
    updateFile,
    deleteFile
}