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

	const deleteFileFromResult = (fileId: string) => {
		console.log("File ID:", fileId)
	}

	return (
		<div>
			<FieldInput text="Search for files" searchChange={
				(e: React.FormEvent<HTMLInputElement>) => {
					setSearchField(e.currentTarget.value.toLocaleLowerCase())
				}
			} />
			<Button text="Search" action={() => searchFiles(searchField)} />
			{searchResults && <FileCardList
				files={searchResults}
				deleteFileCard={(fileId: string) => deleteFileFromResult(fileId)} />}
		</div>
	)
}
