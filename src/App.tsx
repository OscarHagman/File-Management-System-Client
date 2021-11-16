import React, { useState } from 'react'
import Button from './components/buttons/Button'
import { UploadButton } from './components/buttons/Upload.Button'
import FieldInput from './components/inputs/Field.Input'
import FileCardList from './components/file-cards/File.Card.List'
import Categories from './components/inputs/Categories'
import Constants from './shared/global/Constants'
import BackendAPIService from './shared/api/service/BackendAPIService'
import { SearchFileProvider } from './shared/provider/SearchFileProvider'
import { SearchHandler } from './components/SearchHandler'
import { UploadHandler } from './components/UploadHandler'


function App() {
	const [searchResult, setSearchResult] = useState<any>()
	const [uploadedFile, setFile] = useState<File>()
	const [category, setCategory] = useState<string>('')
	const [author, setAuthor] = useState<string>('')

	const checkFormValid = (): boolean => {
		return (uploadedFile && category && author) ? true : false
	}

	const submitFile = () => {
		if (checkFormValid()) {
			BackendAPIService.uploadFile(author, category, uploadedFile)
				.catch((error) => console.log(error))
			setFile(undefined)
			setCategory('')
			setAuthor('')
		}
		else {
			alert('All fields has to be filled')
		}
	}

	const deleteFileFromResult = (fileId: string) => {
		//Delete API has to be called on the FileCard, otherwise weird bugs appear...
		for (let i = 0; i < searchResult.length; i++) {
			if (searchResult[i]._id === fileId) {
				const updatedResult = searchResult
				delete updatedResult[i]
				setSearchResult(updatedResult.filter((n: any) => n))
			}
		}
	}

	return (
		<SearchFileProvider>
			<h1>Codic File Management System</h1>
			{searchResult && <FileCardList
				files={searchResult}
				deleteFileCard={(fileId: string) => deleteFileFromResult(fileId)} />}
			<UploadHandler />
			<SearchHandler />
		</SearchFileProvider>
	)
}

export default App
