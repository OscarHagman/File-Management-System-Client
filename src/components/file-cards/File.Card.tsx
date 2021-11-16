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

const FileCard: React.FC<Props> = ({ title, author, category, fileId }) => {
	const { deleteFile } = useFileManagement()
	const editFile = () => {
		console.log('Edit')
	}

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

	/* 	const deleteFile = () => {
			BackendAPIService.deleteFile(fileId)
				.then((response: any) => {
					console.log(response)
					onDelete(fileId)
				})
				.catch((error: any) => { console.log('ERROR:', error) })
		} */

	return (
		<div>
			<h1 className="cardTop">{title}</h1>

			<div className="cardBottom">
				<p className="textKey">Author:</p> <p className="textValue">{author}</p>
				<p className="textKey">Category:</p> <p className="textValue">{category}</p>
				<p className="textKey">Created At:</p> <p className="textValue">2021/10/27</p>
				<p className="textKey">Updated At:</p> <p className="textValue">2021/10/27</p>
			</div>

			<div className="cardRight">
				<Button text="download" action={downloadFile} />
				{/* 	<Button text="delete" action={deleteFile(fileId)} /> */}
				<button onClick={() => deleteFile(fileId)}>delete</button>
			</div>

			<div className="cardLeft">
				<img src="../../../public/favicon.ico" alt="file-type-icon" />
				<Button text="Edit" action={editFile} />
			</div>
		</div>
	)
}

export default FileCard
