import { IPhotoProps } from '../types/IPhotoProps'

export type Bookmarks = Record<string, IPhotoProps[]>

const STORAGE_KEY = 'bookmarks'

export const getBookmarks = (): Bookmarks => {
	const data = localStorage.getItem(STORAGE_KEY)
	return data ? JSON.parse(data) : {}
}

export const saveBookmarks = (bookmarks: Record<string, IPhotoProps[]>) => {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks))
}
