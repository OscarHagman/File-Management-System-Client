import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router'
import { useFileManagement } from '../hooks/useFileManagement'
import { UploadButton } from './buttons/Upload.Button'
import Constants from '../shared/global/Constants'
import Button from './buttons/Button'
import Categories from './inputs/Categories'
import FieldInput from './inputs/Field.Input'
import Tags from './Tags'
import RoutingPath from 'routes/RoutingPath'

export const UploadHandler = () => {
	const navigate = useNavigate()
	const hiddenFileInput: any = useRef(null)
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
			navigate(RoutingPath.searchView)
		}
		else {
			alert('All fields has to be filled')
		}
	}

	const handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
		if (!event.currentTarget.files) return
		const fileUploaded = event.currentTarget.files[0]
		setFile(fileUploaded)
	}

	useEffect(() => {
		hiddenFileInput.current.click()
	}, [])

	return (
		<div>
			<input
				type="file"
				ref={hiddenFileInput}
				onChange={handleChange}
				style={{ display: 'none' }}
			/>
			{/* <UploadButton text="Upload file" handleFile={(file: File) => { setFile(file) }} /> */}
			<>
				<Categories
					title={uploadedFile?.name || 'test'}
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
			</>
		</div>
	)
}
