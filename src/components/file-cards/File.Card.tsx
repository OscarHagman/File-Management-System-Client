import Button from "../buttons/Button"
import React from 'react'
import * as http from "../../shared/api/BackendAPI"

interface Props {
    title: string,
    author: string,
    category: string,
    fileId: string,
    createdAt?: Date,
    updateAt?: Date,
    onDelete: any
}

const FileCard: React.FC<Props> = ({title, author, category, fileId, onDelete }) => {
    const editFile = () => {
        console.log("Edit")
    }

    const downloadFile = () => {
        http.downloadFile(fileId)
        .then((response: any) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', title);
            document.body.appendChild(link);
            link.click()
        })
        .catch((error) => console.log("ERROR:", error))
    }

    const deleteFile = () => {
        http.deleteFile(fileId)
        .then((response) => {
            console.log(response)
            onDelete(fileId)
        })
        .catch((error) => {console.log("ERROR:", error)})
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
