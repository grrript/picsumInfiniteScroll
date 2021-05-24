import PhotoCard from './PhotoCard'

const PhotoList = ({ photos, setPhotoId, setPhoto }) => {
  return photos.map((photo) => {
    return (
      <PhotoCard
        key={photo.id}
        photo={photo}
        setPhotoId={setPhotoId}
        setPhoto={setPhoto}
      />
    )
  })
}

export default PhotoList
