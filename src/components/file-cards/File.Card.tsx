import Button from '../buttons/Button'
import React from 'react'
import BackendAPIService from '../../shared/api/service/BackendAPIService'
import { useFileManagement } from '../../hooks/useFileManagement'
import styled from 'styled-components'

interface Props {
	title: string,
	author: string,
	category: string,
	fileId: string,
	createdAt?: Date,
	updateAt?: Date,
}

export const FileCard: React.FC<Props> = ({ title, author, category, fileId }) => {
	const { deleteFile } = useFileManagement()

	const downloadFile = () => {
		BackendAPIService.downloadFile(fileId)
			.then((response: any) => {
				const url = window.URL.createObjectURL(new Blob([response.data]))
				const link = document.createElement('a')
				link.href = url
				link.setAttribute('download', title)
				document.body.appendChild(link)
				link.click()
			})
			.catch((error) => console.log('ERROR:', error))
	}

	return (
		<Wrapper>
			<h1>{title}</h1>
			<img src="../../../public/favicon.ico" alt="file-type-icon" />
			<div>
				<span>Author: {author}</span> <br />
				<span>Category: {category}</span> <br />
				<span>Created At: 2021/10/27</span> <br />
				<span>Updated At: 2021/10/27</span> <br />
			</div>
			<div>
				<Button text="download" action={downloadFile} />
				<button onClick={() => deleteFile(fileId)}>delete</button>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	background-color: white;
	width: 60%;
	margin: 0 auto 1%;
`
