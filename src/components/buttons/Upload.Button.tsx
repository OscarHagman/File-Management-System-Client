import React from 'react'
import "./Button.css"


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