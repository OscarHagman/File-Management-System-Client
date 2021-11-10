import React from 'react'
import './Field.Input.css'

interface Props {
    text: string,
    searchChange: React.ChangeEventHandler<HTMLInputElement>
}

const FieldInput: React.FC<Props> = ({ text, searchChange }) => {
	return (
		<input 
			type="search"
			placeholder={text}
			onChange={searchChange}
		/>
	)
}

export default FieldInput
