import { useInfiniteQuery } from '@tanstack/react-query'
import InfiniteScroll from 'react-infinite-scroll-component'
import { fetchPhotos } from '../../api/pexelsApi'
import Loader from '../../ui/Loader/Loader'
import PhotoItem from '../PhotoItem/PhotoItem'
import styles from './GalleryList.module.css'

interface IProps {
	query: string
}

const GalleryList = ({ query }: IProps) => {
	const {
		data = { pages: [] },
		isLoading,
		fetchNextPage,
		hasNextPage,
	} = useInfiniteQuery({
		queryKey: ['photos', query],
		queryFn: ({ pageParam }) => fetchPhotos(query, pageParam),
		initialPageParam: 1,
		getNextPageParam: lastPage =>
			lastPage.next_page ? lastPage.page + 1 : undefined,
	})

	const photos = data?.pages.flatMap(page => page.photos) || []

	return (
		<div id='scrollableDiv' className={styles.container}>
			{isLoading ? (
				<Loader />
			) : (
				<InfiniteScroll
					className={styles.scrollContainer}
					hasMore={hasNextPage}
					next={fetchNextPage}
					loader={<h4>Loading...</h4>}
					dataLength={photos.length}
					scrollableTarget='body'
				>
					{photos?.map(({ id, photographer, src, alt }) => (
						<PhotoItem
							key={id}
							id={id}
							src={src}
							alt={alt}
							photographer={photographer}
						/>
					))}
				</InfiniteScroll>
			)}
		</div>
	)
}
export default GalleryList
