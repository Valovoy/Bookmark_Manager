import { useState } from 'react'
import { IPhotoProps } from '../../types/IPhotoProps'
import Modal from '../Modal/Modal'
import styles from './PhotoItem.module.css'

const PhotoItem = ({ id, src, alt, photographer }: IPhotoProps) => {
	const [isVisible, setVisible] = useState(false)

	const toggleImageClick = () => {
		setVisible(s => !s)
	}

	return (
		<>
			<div className={styles.container} onClick={toggleImageClick}>
				<picture>
					<source srcSet={src.large} media='(min-width: 768px)' />
					<source srcSet={src.medium} media='(min-width: 480px)' />
					<img src={src.small} alt={alt} loading='lazy' />
				</picture>
				<div className={styles.info}>
					<p>{alt || 'No description available'}</p>
					<p className={styles.photographer}>By: {photographer}</p>
				</div>
			</div>

			{isVisible && (
				<Modal
					id={id}
					src={src}
					alt={alt}
					photographer={photographer}
					onClose={toggleImageClick}
				/>
			)}
		</>
	)
}

export default PhotoItem
