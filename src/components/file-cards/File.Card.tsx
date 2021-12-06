import React, { useState } from 'react'
import { Button } from '../Button'
import DeleteConfirmation from './DeleteConfirmation'
import BackendAPIService from '../../shared/api/service/BackendAPIService'
import styled from 'styled-components'
import Badge from './Badge'
import { displayFormatImage } from "../../functions/displayFormatImage"

interface Props {
	title: string,
	author: string,
	category: string,
	fileId: string,
	subjects: any,
	numOfDownloads: number,
	fileSize: string
	fileType: string
	createdAt?: Date,
	updateAt?: Date,
}

export const FileCard: React.FC<Props> = ({ title, author, category, fileId, fileSize, fileType, subjects, numOfDownloads }) => {
	const [deleteDialog, setDeleteDialogen] = useState(false)
	const [downloads, setDownloads] = useState(numOfDownloads)

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

		BackendAPIService.getFileById(fileId)
			.then((response: any) => {
				setDownloads(response.data.numOfDownloads)
			})
			.catch((error) => console.log('ERROR:', error))
	}

/* 	const deleteAndUpdateResults = (fileId: string) => {
		const updatedResults = searchResults.filter((item: any) => item._id != fileId)
		deleteFile(fileId) && setSearchResults(updatedResults)
	} */

	return (
		<Wrapper>
			<Title>{title}</Title> <br />
			{displayFormatImage(fileType)}
			<InformationWrapper>
				<Badge subjects={subjects} />
				<Span>{'Author:'}</Span> <Span2>{author}</Span2> <br />
				<Span>{'Category:'}</Span> <Span2>{category}</Span2> <br />
				<Span>{'Format:'}</Span> <Span2>{fileType}</Span2> <br />
				<Span>{'Uploaded:'}</Span> <Span2>{'2021/10/27'}</Span2> <br />
				<Span2>{fileSize}</Span2> <br />
				<Span2>{downloads} {'downloads'}</Span2> <br />
			</InformationWrapper>
			<ButtonWrapper row='2/2'>
				<Button color={'#00c281'} text={'download'} onClick={() => downloadFile()} />
				<Button color={'#FF6663'} text={'delete'} onClick={() => setDeleteDialogen(true)} />
			</ButtonWrapper>
			<DeleteConfirmation title={title} fileId={fileId} deleteDialog={deleteDialog} setDeleteDialog={setDeleteDialogen} />
		</Wrapper>
	)

}

const Wrapper = styled.div`
	background-color: white;
	padding: 1%;
	border-radius: 25px;
	width: 60%;
	margin: 0 auto 1%;
	display: grid;
	grid-template-columns: repeat(10, 1fr);
	box-shadow: 0 8px 6px -6px black;
`

const Title = styled.span`
	grid-column: 1/11;
	grid-row: 1/1;
	align-self: center;
	justify-self: center;
	font-size: 1.4rem;
`

const FileImage = styled.img`
	width: 80%;
	grid-column: 1/1;
	grid-row: 1/4;
	align-self: center;
	justify-self: center;
	`

const InformationWrapper = styled.div`
	grid-column: 3/9;
`

const Span = styled.span`
`
const Span2 = styled.span`
	font-family: 'Times New Roman', Times, serif;
`

interface values {
	row?: string
}
const ButtonWrapper = styled.div<values>`
	grid-column: 9/10;
	grid-row: ${props => props.row};
	align-self: center;
	justify-self: center;
	display: flex;
	flex-wrap: wrap;
	gap: 12px;
`
