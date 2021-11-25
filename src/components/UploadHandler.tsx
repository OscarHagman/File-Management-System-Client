import { useState } from 'react'
import { useFileManagement } from '../hooks/useFileManagement'
import BackendAPIService from '../shared/api/service/BackendAPIService'
import Constants from '../shared/global/Constants'
import Button from './buttons/Button'
import { UploadButton } from './buttons/Upload.Button'
import Categories from './inputs/Categories'
import FieldInput from './inputs/Field.Input'
import Tags from './Tags'

export const UploadHandler = () => {
	const [uploadedFile, setFile] = useState<File | undefined>(undefined)
	const [category, setCategory] = useState<string>('')
	const [author, setAuthor] = useState<string>('')
	const [subjects, setSubjects] = useState([])
	const { uploadFile } = useFileManagement()

	const checkFormValid = (): boolean => {
		return (uploadedFile && category && author) ? true : false
	}

	const submitFile = () => {
		if (checkFormValid()) {
			uploadFile(author, category, uploadedFile, subjects)
			setFile(undefined)
			setCategory('')
			setAuthor('')
		}
		else {
			alert('All fields has to be filled')
		}
	}

	return (
		<div>
			<UploadButton text="Upload file" handleFile={(file: File) => { setFile(file) }} />
			{uploadedFile && <>
				<Categories
					title={uploadedFile.name}
					categories={Constants.CATEGORIES}
					categoryChange={
						(e: React.ChangeEvent<HTMLInputElement>): void => {
							setCategory(e.currentTarget.value)
						}
					} />
				<FieldInput text="Author" searchChange={
					(e: React.FormEvent<HTMLInputElement>) => {
						setAuthor(e.currentTarget.value.toLocaleLowerCase())
					}
				} />
				<Tags subjects={subjects} setSubjects={setSubjects} />
				<Button text="Upload" action={submitFile} />
				<button onClick={() => console.log(subjects)}>see value</button>
			</>}
		</div>
	)
}
