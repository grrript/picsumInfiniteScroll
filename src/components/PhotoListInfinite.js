import PhotoCard from './PhotoCard'

const PhotoList = ({ photos, setPhotoId }) => {
  return photos.map((photo) => {
    return <PhotoCard key={photo.id} photo={photo} setPhotoId={setPhotoId} />
  })
}

export default PhotoList
