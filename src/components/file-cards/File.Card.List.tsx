import React from 'react'
import FileCard from './File.Card'

interface Props {
    files: any,
    deleteFileCard: any
}

const FileCardList: React.FC<Props> = ({ files, deleteFileCard }) => {
	if (!files) return <div></div>

	return (
		<div>
			{files.map((file: any, index: number) => {
				return (
					<FileCard
						key={index}
						title={file.title}
						author={file.author}
						category={file.category}
						fileId={file._id}
						onDelete={(fileId: string) => deleteFileCard(fileId)}
					/>
				)
			})}
		</div>
	)
}

export default FileCardList
