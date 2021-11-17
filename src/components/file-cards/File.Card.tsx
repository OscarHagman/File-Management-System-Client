import { Button } from '../Button'
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
			<Title>{title}</Title> <br />
			<FileImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/833px-PDF_file_icon.svg.png" alt="file-type-icon" />
			<InformationWrapper>
				<Span>Author:</Span> <Span2>{author}</Span2> <br />
				<Span>Category:</Span> <Span2>{category}</Span2> <br />
				<Span>Created At:</Span> <Span2>2021/10/27</Span2> <br />
				<Span2>{Math.floor(Math.random() * 100) + 1} downloads</Span2> <br />
			</InformationWrapper>
			<ButtonWrapper row="1/2">
				<Button color={'#00c281'} text={'download'} onClick={() => downloadFile()} />
			</ButtonWrapper>
			<ButtonWrapper row="2/4">
				<Button color={'#FF6663'} text={'delete'} onClick={() => deleteFile(fileId)} />
			</ButtonWrapper>
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
`

const Title = styled.span`
	grid-column: 5/7;
	grid-row: 1/1;
	align-self: center;
	justify-self: center;
	font-size: 1.4rem;
`

const FileImage = styled.img`
	width: 50%;
	height: 50%;
	grid-column: 1/1;
	grid-row: 1/4;
	align-self: center;
	justify-self: center;
`

const InformationWrapper = styled.div`
	grid-column: 3/7;
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
	grid-column: 8/11;
	grid-row: ${props => props.row};
	align-self: center;
	justify-self: center;
`
