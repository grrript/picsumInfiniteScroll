import { Dialog } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const PhotoDialog = (props) => {
  const { open, setOpen, setPhotoId, photoId } = props

  const useStyles = makeStyles({
    closeButton: {
      position: 'absolute',
      right: 0,
      top: 0,
      color: '#bbb',
      backgroundColor: 'rgba(0,0,0,.3)',
    },
  })
  const classes = useStyles()

  if (photoId < 0) {
    return <></>
  }

  const handleClose = () => {
    setOpen(false)
    setPhotoId(-1)
  }
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby='current photo by todo'
      open={open}
    >
      <IconButton
        aria-label='close'
        className={classes.closeButton}
        onClick={handleClose}
      >
        <CloseIcon />
      </IconButton>

      <img
        alt='from picsum'
        src={`https://picsum.photos/id/${photoId}/600/400
`}
      />
    </Dialog>
  )
}

export default PhotoDialog
