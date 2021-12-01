import { useState, useEffect, useRef } from 'react'
import { useFileManagement } from 'hooks/useFileManagement'
import { useNavigate } from 'react-router'
import { TextField } from '@mui/material'
import { Button } from 'components/Button'
import RoutingPath from 'routes/RoutingPath'
import Categories from 'components/inputs/Categories'
import Constants from 'shared/global/Constants'
import styled from 'styled-components'
import Tags from './Tags'

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
		<Wrapper>
			<input
				type='file'
				ref={hiddenFileInput}
				onChange={handleChange}
				style={{ display: 'none' }}/>
			<Categories
				title={uploadedFile?.name || ''}
				categories={Constants.CATEGORIES}
				categoryChange={(e: React.ChangeEvent<HTMLInputElement>): void => { setCategory(e.currentTarget.value) }} />
			<TextField
				required={true}
				id='filled-required'
				label='Author'
				variant='filled'
				onChange={(e) => setAuthor(e.target.value.toLocaleLowerCase())} />
			<Tags subjects={subjects} setSubjects={setSubjects} />
			<Button text={'send file to the cloud'} onClick={() => submitFile()} />
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