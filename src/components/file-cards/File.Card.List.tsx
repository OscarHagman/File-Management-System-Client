import React from 'react'
import styled from 'styled-components'
import { FileCard } from './File.Card'
import { NoFileFound } from './NoFileFound'

interface Props {
	files: any,
	searchTerm: string
}

export const FileCardList: React.FC<Props> = ({ files, searchTerm }) => {
	if (files && files.length == 0 && searchTerm) return <NoFileFound />

	return (
		<Wrapper>
			{files && files.map((item: any, index: number) => {
				return (
					<FileCard
						key={index}
						title={item.title}
						author={item.author}
						category={item.category}
						subjects={item.subjects}
						fileId={item._id}
						fileSize={item.fileSize}
						fileType={item.fileType}
					/>
				)
			})}
		</Wrapper>
	)
}

const Wrapper = styled.div`
margin: 1%;
`