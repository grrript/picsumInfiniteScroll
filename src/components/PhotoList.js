import usePicsumPhotos from '../hooks/usePicsumPhotos'
import PhotoCard from './PhotoCard'

const PhotoList = ({ setPhotoId, setPhoto }) => {
  const photos = usePicsumPhotos()

  return photos.map((photo) => {
    return (
      <PhotoCard
        setPhoto={setPhoto}
        key={photo.id}
        photo={photo}
        setPhotoId={setPhotoId}
      />
    )
  })
}

export default PhotoList
