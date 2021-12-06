import React from 'react'
interface Props {
	categories: string[],
	categoryChange: React.ChangeEventHandler<HTMLInputElement>
}

const Categories: React.FC<Props> = ({ categories, categoryChange }) => {
	return (
		<div>
			{categories.map((category, index) => {
				return (
					<div key={index}>
						<input
							type='radio'
							id={category}
							name='category'
							value={category}
							onChange={categoryChange} />
						<label htmlFor={category}>{category}</label>
					</div>
				)
			})}
		</div>
	)
}

export default Categories