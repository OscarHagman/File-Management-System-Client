import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { SearchContext } from '../../shared/provider/SearchFileProvider'
import { useFileManagement } from '../../hooks/useFileManagement'

export default function AlertDialog(props: { title: string, deleteDialog: any, setDeleteDialog: any, fileId: string }) {
	const [searchResults, setSearchResults] = React.useContext(SearchContext)
	const { deleteFile } = useFileManagement()

	const handleClickOpen = () => {
		props.setDeleteDialog(true)
	}

	const handleClose = () => {
		props.setDeleteDialog(false)
	}

	const deleteAndUpdateResults = () => {
		const updatedResults = searchResults.filter((item: any) => item._id != props.fileId)
		deleteFile(props.fileId) && setSearchResults(updatedResults)
		props.setDeleteDialog(false)
	}

	return (
		<div>
			{/*     <Button variant="outlined" onClick={handleClickOpen}>
            Open alert dialog
         </Button> */}
			<Dialog
				open={props.deleteDialog}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'>
				<DialogTitle id='alert-dialog-title'>
					{'Are you sure?'}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'>
						{'You are about to permanently delete'} <br /><b>{props.title}</b>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>{'cancel'}</Button>
					<Button onClick={deleteAndUpdateResults} autoFocus={true}>
						{'DELETE'}
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}