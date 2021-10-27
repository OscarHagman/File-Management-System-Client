import React, { useState } from 'react'
import axios from "axios"
import { uploadFile } from "../../shared/api/BackendAPI"
import "./Button.css"
import Constants from '../../shared/global/Constants'
const Fields = Constants.Fields


const FirstUploadButton = () => {
    const [selectedFile, setSelectedFile] = useState<File>()

    const onChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
		if (!e.currentTarget.files) return
		setSelectedFile(e.currentTarget.files[0])
    }

	const onFormSubmit = (e: React.SyntheticEvent) => {
		if (!selectedFile) return
		e.preventDefault()

		// uploadFile()

		//console.log(typeof selectedFile)

		// const url = '/upload-file';
		// const formData = new FormData();
		// formData.append(Fields.TITLE, selectedFile.name)
		// formData.append(Fields.AUTHOR, "oscar")
		// formData.append(Fields.CATEGORY, "exercise")
		// formData.append(Fields.FILE, selectedFile)
		
		// axios({
		// 	method: "post",
		// 	url: url,
		// 	data: formData,
		// 	headers: { "content-type": "multipart/form-data" },
		// })
		// 	.then(function (response) {
		// 	  console.log(response.data);
		// 	})
		// 	.catch(function (response) {
		// 	  console.log(response);
		// 	});
	  }

    return (
		<form onSubmit={onFormSubmit}>
        	<input type="file" onChange={onChange} />
        	<button type="submit">Upload</button>
		</form>
    )
}

interface Props {
	text: String,
	handleFile: (file: any) => void
}

export const UploadButton: React.FC<Props> = ({ text, handleFile }) => {
	const hiddenFileInput: any = React.useRef(null);
  
	const handleClick = (event: React.SyntheticEvent) => {
	  hiddenFileInput.current.click();
	};  
	
	const handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
		if (!event.currentTarget.files) return
		const fileUploaded = event.currentTarget.files[0]
		handleFile(fileUploaded);
	};
	
	return (
	  <>
		<button className="btn" onClick={handleClick}>
		  {text}
		</button>
		<input 
			type="file"
			ref={hiddenFileInput}
			onChange={handleChange}
			style={{display:'none'}} 
		/> 
	  </>
	);
};