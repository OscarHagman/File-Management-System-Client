import React from 'react'
import styled from 'styled-components'
import { FileCard } from './File.Card'

interface Props {
	files: any,
}

export const FileCardList: React.FC<Props> = ({ files }) => {
	if (!files) return <div></div>

	return (
		<Wrapper>
			{files.map((file: any, index: number) => {
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