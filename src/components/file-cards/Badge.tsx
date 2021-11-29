import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

export default function Badge(props: { subjects: [string] }) {

	const displaySubjects = () => {
		return (
			props.subjects.map((item: any) => <Chip key={Math.random()} label={item} size="small" />)
		)
	}

	return (
		<Stack direction="row" spacing={1}>
			{displaySubjects()}
		</Stack>
	)
}