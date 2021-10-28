import React from 'react'
import FileCard from "./File.Card"

interface Props {
    files: any
}

const FileCardList: React.FC<Props> = ({ files }) => {
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
                />
            )
        })}
        </div>
    )
}

export default FileCardList
