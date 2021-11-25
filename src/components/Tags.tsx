import * as React from 'react'
import { inspect } from 'util'
import Chip from '@mui/material/Chip'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'

export default function Tags() {
	const [value, setValue] = React.useState(null)

	const onChange = React.useCallback((e: any, newValue: any) => {
		setValue(newValue)
	}, [setValue])

	return (
		<Stack spacing={3} sx={{ width: 500 }}>
			<Autocomplete
				multiple
				id="tags-filled"
				options={listOfTags.map((option) => option.searchTag)}
				onChange={onChange}
				freeSolo
				renderTags={(value: readonly string[], getTagProps) =>
					value.map((option: string, index: number) => (
						// eslint-disable-next-line react/jsx-key
						<Chip variant="outlined" label={option} {...getTagProps({ index })} />
					))
				}
				renderInput={(params) => (
					<TextField
						{...params}
						variant="filled"
						label="Subject ñ Search Labels"
						placeholder="add new subject?"
					/>
				)}
			/>
			{inspect(value)}
		</Stack>
	)
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const listOfTags = [
	{ searchTag: 'The Shawshank Redemption' },
	{ searchTag: 'The Godfather' },
	{ searchTag: 'The Godfather: Part II' },
	{ searchTag: 'The Dark Knight' },
	{ searchTag: '12 Angry Men' },
	{ searchTag: 'Schindler\'s List' },
	{ searchTag: 'Pulp Fiction' },
	{ searchTag: 'The Good, the Bad and the Ugly' },
	{ searchTag: 'Fight Club' },
	{ searchTag: 'Star Wars: Episode V - The Empire Strikes Back' },
	{ searchTag: 'Forrest Gump' },
	{ searchTag: 'Inception' },
	{ searchTag: 'One Flew Over the Cuckoo\'s Nest' },
	{ searchTag: 'Goodfellas' },
	{ searchTag: 'The Matrix' },
	{ searchTag: 'Seven Samurai' },
]