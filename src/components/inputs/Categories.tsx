import React from 'react'

interface Props {
    categories: string[],
    categoryChange: React.ChangeEventHandler<HTMLInputElement>
}

const Categories: React.FC<Props> = ({ categories, categoryChange }) => {
    return (
        <>
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
        </>
    )
}

export default Categories
