import React from 'react'
import styled from 'styled-components'
import { primaryFont } from 'shared/styles/GlobalStyles'

interface Props {
	categories: string[],
	title: string,
	categoryChange: React.ChangeEventHandler<HTMLInputElement>
}

const Categories: React.FC<Props> = ({ title, categories, categoryChange }) => {
	return (
		<div>
			<Title>{title}</Title>
			{categories.map((category, index) => {
				return (
					<div key={index}>
						<input
							type="radio"
							id={category}
							name="category"
							value={category}
							onChange={categoryChange}
						/>
						<label htmlFor={category}>{category}</label>
					</div>
				)
			})}
		</div>
	)
}

export default Categories

const Title = styled.h1`
	text-align: center;
	font-family: ${primaryFont};
`
