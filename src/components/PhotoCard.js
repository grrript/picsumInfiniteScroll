import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'

const PhotoCard = ({ photo, setPhotoId }) => {
  const handleClick = () => {
    setPhotoId(photo.id)
  }
  const useStylesForImage = makeStyles({
    hover: {
      '&:hover': {
        cursor: 'pointer',
      },
      border: '14px solid #fff',
      lineHeight: 0,
    },
    border: {
      border: '14px solid #fff',
      lineHeight: 0,
    },
  })
  const imageClass = useStylesForImage()
  return (
    <>
      <div key={photo.id}>
        <Card
          elevation={6}
          boxshadow={3}
          style={{
            xxmaxWidth: '240px',
            height: 'auto',
            objectFit: 'cover',
            margin: '2rem 2rem',
          }}
        >
          <div
            onClick={handleClick}
            key={photo.id}
            className={imageClass.hover}
          >
            <img
              alt={`by ${photo.author}`}
              src={`https://picsum.photos/id/${photo.id}/367/267`}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </Card>
      </div>
    </>
  )
}

export default PhotoCard
