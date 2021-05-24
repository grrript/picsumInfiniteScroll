import axios from 'axios'
import { useState, useEffect } from 'react'

const usePicsumPhotos = () => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const photos = await axios.get('https://picsum.photos/v2/list')
        console.log('photos hook: ', photos)
        const { data } = photos
        if (data) {
          setPhotos(data)
        }
      } catch (e) {
        console.log('error: ', e)
      }
    }
    fetchPhotos()
  }, [])
  return photos
}
export default usePicsumPhotos
