import usePicsumPhotos from '../hooks/usePicsumPhotos'
import PhotoCard from './PhotoCard'

const PhotoList = ({ setPhotoId }) => {
  const photos = usePicsumPhotos()

  return photos.map((photo) => {
    return <PhotoCard key={photo.id} photo={photo} setPhotoId={setPhotoId} />
  })
}

export default PhotoList
