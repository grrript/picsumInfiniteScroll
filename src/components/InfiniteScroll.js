import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import usePicsumPhotos from '../hooks/usePicsumPhotos'
import fetchMorePhotos from './fetchMorePhotos'
import PhotoList from './PhotoListInfinite'
import PhotoDialog from './PhotoDialog'
import Container from './Container'

const MAX_NUMBER = 420

const InfiniteScrollComponent = () => {
  const [open, setOpen] = useState(false)
  const [photoId, setPhotoId] = useState(-1)
  const [photo, setPhoto] = useState({})

  const [items, setItems] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(1)

  const photos = usePicsumPhotos()

  useEffect(() => {
    if (photoId > -1) {
      setOpen(true)
    }
  }, [photoId])

  useEffect(() => {
    if (photos) {
      setItems(photos)
    }
  }, [photos])

  const fetchMoreData = () => {
    if (items.length >= MAX_NUMBER) {
      setHasMore(false)
      return
    }

    const fetchMore = async () => {
      const morePhotos = await fetchMorePhotos(page)
      if (morePhotos) {
        setItems(items.concat(morePhotos))
        setPage((page) => {
          return page + 1
        })
      }
    }
    fetchMore()
  }

  return (
    <Container>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        height={550}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>You have seen it all</b>
          </p>
        }
      >
        <PhotoList photos={items} setPhotoId={setPhotoId} setPhoto={setPhoto} />
      </InfiniteScroll>
      <PhotoDialog
        photoId={photoId}
        setPhotoId={setPhotoId}
        photo={photo}
        open={open}
        setOpen={setOpen}
      />
    </Container>
  )
}

export default InfiniteScrollComponent
