import React from 'react'

interface Props {
    categories: string[],
    title: string,
    categoryChange: React.ChangeEventHandler<HTMLInputElement>
}

const Categories: React.FC<Props> = ({ title, categories, categoryChange }) => {
	return (
		<div>
			<h1>{title}</h1>
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
