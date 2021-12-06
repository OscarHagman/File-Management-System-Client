import { useState, useEffect, useRef } from 'react'
import { useFileManagement } from 'hooks/useFileManagement'
import { useNavigate } from 'react-router'
import { Form, Formik } from 'formik'
import { Button } from 'components/Button'
import RoutingPath from 'routes/RoutingPath'
import Categories from 'view/fileupload/components/Categories'
import Constants from 'shared/global/Constants'
import styled from 'styled-components'
import Tags from './Tags'
import { fileUploadValidation } from 'shared/validations/fileUploadValidation'
import { InputField } from 'components/html/InputField'

export const UploadHandler = () => {
	const navigate = useNavigate()
	const { uploadFile } = useFileManagement()
	const hiddenFileInput: any = useRef(null)
	const [uploadedFile, setFile] = useState<File | undefined>(undefined)
	const [category, setCategory] = useState<string>('Assignment')
	/* const [author, setAuthor] = useState<string>('') */
	const [subjects, setSubjects] = useState([])

	/* const checkFormValid = (): boolean => {
		return (uploadedFile && category && author) ? true : false
	} */

	const submitFile = (values: any) => {
		/* 	if (checkFormValid()) { */
		uploadFile(values.author.toLowerCase(), category, uploadedFile, subjects)
		setFile(undefined)
		setCategory('')
		/* 	setAuthor('') */
		navigate(RoutingPath.searchView)
	}
	/* else {
		alert('All fields has to be filled')
	}
} */

	const handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
		if (!event.currentTarget.files) return
		const fileUploaded = event.currentTarget.files[0]
		setFile(fileUploaded)
	}

	useEffect(() => {
		hiddenFileInput.current.click()
	}, [])

	return (
		<Wrapper>
			<h1>{uploadedFile?.name}</h1>
			<Formik
				initialValues={{ category: category, uploadedFile: uploadedFile, author: '' }}
				validationSchema={fileUploadValidation}
				onSubmit={(values, actions) => submitFile(values)}>
				<Form>
					<input
						type='file'
						name='file'
						ref={hiddenFileInput}
						onChange={handleChange}
						style={{ display: 'none' }} />
					<Categories
						categories={Constants.CATEGORIES}
						categoryChange={(e: React.ChangeEvent<HTMLInputElement>): void => { setCategory(e.currentTarget.value) }} />
					<InputField required={true} name='author' label='Author' type='text' /* onChange={() => (e: any) => setAuthor(e.target.value.toLocaleLowerCase())} */ />
					<Tags subjects={subjects} setSubjects={setSubjects} />
					<Button text={'send file to the cloud'} />
				</Form>
			</Formik>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: grid;
	width: 60%;
	margin: 0 auto;
	grid-gap: 10%;
	margin-top: 10%;
`