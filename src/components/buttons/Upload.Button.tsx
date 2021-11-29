import React from 'react'
import { Button } from '../Button'
import styled from 'styled-components'


interface Props {
	text: string,
	handleFile: (file: any) => void
}

export const UploadButton: React.FC<Props> = ({ text, handleFile }) => {
	const hiddenFileInput: any = React.useRef(null)

	const handleClick = (event: React.SyntheticEvent) => {
		hiddenFileInput.current.click()
	}

	const handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
		if (!event.currentTarget.files) return
		const fileUploaded = event.currentTarget.files[0]
		handleFile(fileUploaded)
	}

	return (
		<Wrapper>
			<Button text={'uploadxxx'} onClick={handleClick} />
			<input
				type="file"
				ref={hiddenFileInput}
				onChange={handleChange}
				style={{ display: 'none' }}
			/>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	padding: 15%;
`