import Button from "../buttons/Button"
import React from 'react'

interface Props {
    title: string,
    author: string,
    category: string,
    createdAt?: Date,
    updateAt?: Date
}

const FileCard: React.FC<Props> = ({title, author, category}) => {
    const editFile = () => {
        console.log("Edit")
    }

    const downloadFile = () => {
        console.log("downloaded")
    }

    const deleteFile = () => {
        console.log("deleted")
    }

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
                <Button text="download" action={downloadFile}/>
                <Button text="delete" action={deleteFile}/>
            </div>

            <div className="cardLeft">
                <img src="../../../public/favicon.ico" alt="file-type-icon"/>
                <Button text="Edit" action={editFile}/>
            </div>
        </div>
    )
}

export default FileCard
