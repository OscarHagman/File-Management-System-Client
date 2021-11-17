import React from 'react'
import styled from 'styled-components'
import { FileCard } from './File.Card'

interface Props {
	files: any,
	searchTerm: string
}

export const FileCardList: React.FC<Props> = ({ files, searchTerm }) => {
	if (files && files.length == 0 && searchTerm) return <h1>No files found</h1>

	return (
		<Wrapper>
			{files && files.map((file: any, index: number) => {
				return (
					<FileCard
						key={index}
						title={file.title}
						author={file.author}
						category={file.category}
						fileId={file._id}
					/>
				)
			})}
		</Wrapper>
	)
}

const Wrapper = styled.div`
margin: 1%;
`