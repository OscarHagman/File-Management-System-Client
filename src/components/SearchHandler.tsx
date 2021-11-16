import { useContext, useState } from 'react'
import { useFileManagement } from '../hooks/useFileManagement'
import { SearchContext } from '../shared/provider/SearchFileProvider'
import Button from './buttons/Button'
import FieldInput from './inputs/Field.Input'
import FileCardList from './file-cards/File.Card.List'

export const SearchHandler = () => {
	const [searchResults] = useContext(SearchContext)
	const [searchField, setSearchField] = useState<string>('')
	const { searchFiles } = useFileManagement()

	const displaySearch = () => {
		return searchResults.map((element: any) =>
			<div key={element._id}>
				<p>{element.author}</p>
				<p>{element.category}</p>
				<p>{element.createdAt}</p>
				<p>{element.filePath}</p>
				<p>{element.title}</p>
				<p>{element.updatedAt}</p>
			</div>
		)
	}

	return (
		<div>
			<FieldInput text="Search for files" searchChange={
				(e: React.FormEvent<HTMLInputElement>) => {
					setSearchField(e.currentTarget.value.toLocaleLowerCase())
				}
			} />
			<Button text="Search" action={() => searchFiles(searchField)} />
			{displaySearch()}
			{/* {<FileCardList
				files={searchResults}
				deleteFileCard={(fileId: string) => console.log(fileId)} />} */}
		</div>
	)
}
