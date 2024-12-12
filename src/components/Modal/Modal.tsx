import { useState } from 'react'
import { useBookmarks } from '../../context/BookmarksContext'
import { IPhotoProps } from '../../types/IPhotoProps'
import Button from '../../ui/Button/Button'
import Select from '../../ui/Select/Select'
import TextInput from '../../ui/TextInput/TextInput'

import styles from './Modal.module.css'

interface ModalProps extends IPhotoProps {
  onClose: () => void
}

const Modal = ({ id, src, alt, photographer, onClose }: ModalProps) => {
  const [folderName, setFolderName] = useState('')

  const { bookmarks, removeBookmark, addImageToFolder } = useBookmarks()

  const isImageBookmarked = Object.values(bookmarks).some(folder =>
    folder.find(image => image.id === id),
  )

  const handleFolderChange = (value: string) => {
    setFolderName(value)
  }

  const handleAddToFolder = () => {
    addImageToFolder(folderName.trim(), {
      id,
      src,
      alt,
      photographer,
    })

    setFolderName('')
  }

  const handleRemoveFromFolder = () => {
    removeBookmark(id)
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
          <img src={src?.medium} alt={alt} className={styles.image} />
          <div className={styles.actions}>
            {!isImageBookmarked ? (
              <>
                {Object.keys(bookmarks).length > 0 && (
                  <Select
                    placeholder="Select folder"
                    optionList={Object.keys(bookmarks)}
                    handleChange={handleFolderChange}
                  />
                )}
                <TextInput
                  className={styles.input}
                  placeholder="New folder name"
                  handleChange={handleFolderChange}
                  handleKeyDown={handleAddToFolder}
                />
                <Button
                  text="Add to Bookmark"
                  isDisabled={!folderName}
                  handleAction={handleAddToFolder}
                />
              </>
            ) : (
              <Button
                text="Remove from Bookmark"
                className={styles.deleteButton}
                handleAction={handleRemoveFromFolder}
              />
            )}
          </div>
        </>
      </div>
    </div>
  )
}

export default Modal
