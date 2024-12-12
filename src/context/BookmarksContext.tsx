import { createContext, ReactNode, useContext, useState } from 'react'
import { IPhotoProps } from '../types/IPhotoProps'
import { Bookmarks, getBookmarks, saveBookmarks } from '../utils/storage'

interface BookmarksContextProps {
  bookmarks: Bookmarks
  removeBookmark: (id: number) => void
  addImageToFolder: (folder: string, image: IPhotoProps) => void
}

const BookmarksContext = createContext<BookmarksContextProps | undefined>(
  undefined,
)

export const useBookmarks = () => {
  const context = useContext(BookmarksContext)
  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarksProvider')
  }
  return context
}

export const BookmarksProvider = ({ children }: { children: ReactNode }) => {
  const [bookmarks, setBookmarks] = useState<Bookmarks>(getBookmarks())

  const addImageToFolder = (folder: string, image: IPhotoProps) => {
    const updatedBookmarks = { ...bookmarks }

    if (!updatedBookmarks[folder]) updatedBookmarks[folder] = []
    if (!updatedBookmarks[folder].includes(image)) {
      updatedBookmarks[folder].push(image)
      saveBookmarks(updatedBookmarks)
      setBookmarks(updatedBookmarks)
    }
  }

  const removeBookmark = (id: number) => {
    const updatedBookmarks = { ...bookmarks }
    for (const folder in updatedBookmarks) {
      updatedBookmarks[folder] = updatedBookmarks[folder].filter(
        image => image.id !== id,
      )
      if (updatedBookmarks[folder].length === 0) {
        delete updatedBookmarks[folder]
      }
    }
    setBookmarks(updatedBookmarks)
    saveBookmarks(updatedBookmarks)
  }

  return (
    <BookmarksContext.Provider
      value={{ bookmarks, removeBookmark, addImageToFolder }}
    >
      {children}
    </BookmarksContext.Provider>
  )
}
