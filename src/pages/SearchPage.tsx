import { useCallback, useState } from 'react'
import GalleryList from '../components/GalleryList/GalleryList'
import SearchBar from '../components/SearchBar/SearchBar'

const SearchPage = () => {
  const [query, setQuery] = useState('cats')

  const saveSearchQuery = useCallback((description: string) => {
    setQuery(description)
  }, [])

  return (
    <>
      <SearchBar saveSearchQuery={saveSearchQuery} />
      <GalleryList query={query} />
    </>
  )
}

export default SearchPage
