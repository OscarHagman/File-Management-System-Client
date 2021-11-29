import { useState, useEffect, useRef } from 'react'
import { useFileManagement } from '../../../hooks/useFileManagement'
import { useNavigate } from 'react-router'
import { Button } from 'components/Button'
import Constants from '../../../shared/global/Constants'
import Categories from '../../../components/inputs/Categories'
import FieldInput from '../../../components/inputs/Field.Input'
import Tags from './Tags'
import RoutingPath from 'routes/RoutingPath'

export const UploadHandler = () => {
	const navigate = useNavigate()
	const { uploadFile } = useFileManagement()
	const hiddenFileInput: any = useRef(null)
	const [uploadedFile, setFile] = useState<File | undefined>(undefined)
	const [category, setCategory] = useState<string>('')
	const [author, setAuthor] = useState<string>('')
	const [subjects, setSubjects] = useState([])

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
			<Categories
				title={uploadedFile?.name || ''}
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
			<Button text={'send file to the cloud'} onClick={() => submitFile()} />
		</div>
	)
}
