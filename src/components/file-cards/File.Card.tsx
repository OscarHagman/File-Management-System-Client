import Button from '../buttons/Button'
import React from 'react'
import BackendAPIService from '../../shared/api/service/BackendAPIService'
import { useFileManagement } from '../../hooks/useFileManagement'

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
		<div>
			<h1>{title}</h1>
			<div>
				<p>Author:</p> <p>{author}</p>
				<p>Category:</p> <p>{category}</p>
				<p>Created At:</p> <p>2021/10/27</p>
				<p>Updated At:</p> <p>2021/10/27</p>
			</div>
			<div>
				<Button text="download" action={downloadFile} />
				<button onClick={() => deleteFile(fileId)}>delete</button>
			</div>
			<div>
				<img src="../../../public/favicon.ico" alt="file-type-icon" />
			</div>
		</div>
	)
}
