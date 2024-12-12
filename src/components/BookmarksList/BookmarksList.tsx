import { useBookmarks } from '../../context/BookmarksContext'
import PhotoItem from '../PhotoItem/PhotoItem'
import styles from './BookmarksList.module.css'

const BookmarksList = () => {
	const { bookmarks } = useBookmarks()

	return (
		<div>
			{Object.entries(bookmarks).map(([folderName, images]) => (
				<div key={folderName} className={styles.container}>
					<h2>{folderName}</h2>
					<div className={styles.scrollContainer}>
						{images.map(({ id, src, alt, photographer }) => (
							<PhotoItem
								key={id}
								id={id}
								src={src}
								alt={alt}
								photographer={photographer}
							/>
						))}
					</div>
				</div>
			))}
		</div>
	)
}
export default BookmarksList
