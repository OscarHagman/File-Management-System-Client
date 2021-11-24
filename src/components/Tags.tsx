import * as React from 'react'
import Chip from '@mui/material/Chip'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'

export default function Tags() {
	return (
		<Stack spacing={3} sx={{ width: 500 }}>
			<Autocomplete
				multiple
				id="tags-filled"
				options={searchTags.map((option) => option.searchTag)}
				defaultValue={[searchTags[13].searchTag]}
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
						placeholder="subject"
					/>
				)}
			/>
		</Stack>
	)
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const searchTags = [
	{ searchTag: 'The Shawshank Redemption', year: 1994 },
	{ searchTag: 'The Godfather', year: 1972 },
	{ searchTag: 'The Godfather: Part II', year: 1974 },
	{ searchTag: 'The Dark Knight', year: 2008 },
	{ searchTag: '12 Angry Men', year: 1957 },
	{ searchTag: 'Schindler\'s List', year: 1993 },
	{ searchTag: 'Pulp Fiction', year: 1994 },
	{
		searchTag: 'The Lord of the Rings: The Return of the King',
		year: 2003,
	},
	{ searchTag: 'The Good, the Bad and the Ugly', year: 1966 },
	{ searchTag: 'Fight Club', year: 1999 },
	{
		searchTag: 'The Lord of the Rings: The Fellowship of the Ring',
		year: 2001,
	},
	{
		searchTag: 'Star Wars: Episode V - The Empire Strikes Back',
		year: 1980,
	},
	{ searchTag: 'Forrest Gump', year: 1994 },
	{ searchTag: 'Inception', year: 2010 },
	{
		searchTag: 'The Lord of the Rings: The Two Towers',
		year: 2002,
	},
	{ searchTag: 'One Flew Over the Cuckoo\'s Nest', year: 1975 },
	{ searchTag: 'Goodfellas', year: 1990 },
	{ searchTag: 'The Matrix', year: 1999 },
	{ searchTag: 'Seven Samurai', year: 1954 },
	{
		searchTag: 'Star Wars: Episode IV - A New Hope',
		year: 1977,
	},
	{ searchTag: 'City of God', year: 2002 },
	{ searchTag: 'Se7en', year: 1995 },
	{ searchTag: 'The Silence of the Lambs', year: 1991 },
	{ searchTag: 'It\'s a Wonderful Life', year: 1946 },
	{ searchTag: 'Life Is Beautiful', year: 1997 },
	{ searchTag: 'The Usual Suspects', year: 1995 },
	{ searchTag: 'Léon: The Professional', year: 1994 },
	{ searchTag: 'Spirited Away', year: 2001 },
	{ searchTag: 'Saving Private Ryan', year: 1998 },
	{ searchTag: 'Once Upon a Time in the West', year: 1968 },
	{ searchTag: 'American History X', year: 1998 },
	{ searchTag: 'Interstellar', year: 2014 },
	{ searchTag: 'Casablanca', year: 1942 },
	{ searchTag: 'City Lights', year: 1931 },
	{ searchTag: 'Psycho', year: 1960 },
	{ searchTag: 'The Green Mile', year: 1999 },
	{ searchTag: 'The Intouchables', year: 2011 },
	{ searchTag: 'Modern Times', year: 1936 },
	{ searchTag: 'Raiders of the Lost Ark', year: 1981 },
	{ searchTag: 'Rear Window', year: 1954 },
	{ searchTag: 'The Pianist', year: 2002 },
	{ searchTag: 'The Departed', year: 2006 },
	{ searchTag: 'Terminator 2: Judgment Day', year: 1991 },
	{ searchTag: 'Back to the Future', year: 1985 },
	{ searchTag: 'Whiplash', year: 2014 },
	{ searchTag: 'Gladiator', year: 2000 },
	{ searchTag: 'Memento', year: 2000 },
	{ searchTag: 'The Prestige', year: 2006 },
	{ searchTag: 'The Lion King', year: 1994 },
	{ searchTag: 'Apocalypse Now', year: 1979 },
	{ searchTag: 'Alien', year: 1979 },
	{ searchTag: 'Sunset Boulevard', year: 1950 },
	{
		searchTag: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
		year: 1964,
	},
	{ searchTag: 'The Great Dictator', year: 1940 },
	{ searchTag: 'Cinema Paradiso', year: 1988 },
	{ searchTag: 'The Lives of Others', year: 2006 },
	{ searchTag: 'Grave of the Fireflies', year: 1988 },
	{ searchTag: 'Paths of Glory', year: 1957 },
	{ searchTag: 'Django Unchained', year: 2012 },
	{ searchTag: 'The Shining', year: 1980 },
	{ searchTag: 'WALL·E', year: 2008 },
	{ searchTag: 'American Beauty', year: 1999 },
	{ searchTag: 'The Dark Knight Rises', year: 2012 },
	{ searchTag: 'Princess Mononoke', year: 1997 },
	{ searchTag: 'Aliens', year: 1986 },
	{ searchTag: 'Oldboy', year: 2003 },
	{ searchTag: 'Once Upon a Time in America', year: 1984 },
	{ searchTag: 'Witness for the Prosecution', year: 1957 },
	{ searchTag: 'Das Boot', year: 1981 },
	{ searchTag: 'Citizen Kane', year: 1941 },
	{ searchTag: 'North by Northwest', year: 1959 },
	{ searchTag: 'Vertigo', year: 1958 },
	{
		searchTag: 'Star Wars: Episode VI - Return of the Jedi',
		year: 1983,
	},
	{ searchTag: 'Reservoir Dogs', year: 1992 },
	{ searchTag: 'Braveheart', year: 1995 },
	{ searchTag: 'M', year: 1931 },
	{ searchTag: 'Requiem for a Dream', year: 2000 },
	{ searchTag: 'Amélie', year: 2001 },
	{ searchTag: 'A Clockwork Orange', year: 1971 },
	{ searchTag: 'Like Stars on Earth', year: 2007 },
	{ searchTag: 'Taxi Driver', year: 1976 },
	{ searchTag: 'Lawrence of Arabia', year: 1962 },
	{ searchTag: 'Double Indemnity', year: 1944 },
	{
		searchTag: 'Eternal Sunshine of the Spotless Mind',
		year: 2004,
	},
	{ searchTag: 'Amadeus', year: 1984 },
	{ searchTag: 'To Kill a Mockingbird', year: 1962 },
	{ searchTag: 'Toy Story 3', year: 2010 },
	{ searchTag: 'Logan', year: 2017 },
	{ searchTag: 'Full Metal Jacket', year: 1987 },
	{ searchTag: 'Dangal', year: 2016 },
	{ searchTag: 'The Sting', year: 1973 },
	{ searchTag: '2001: A Space Odyssey', year: 1968 },
	{ searchTag: 'Singin\' in the Rain', year: 1952 },
	{ searchTag: 'Toy Story', year: 1995 },
	{ searchTag: 'Bicycle Thieves', year: 1948 },
	{ searchTag: 'The Kid', year: 1921 },
	{ searchTag: 'Inglourious Basterds', year: 2009 },
	{ searchTag: 'Snatch', year: 2000 },
	{ searchTag: '3 Idiots', year: 2009 },
	{ searchTag: 'Monty Python and the Holy Grail', year: 1975 },
]