import { memo, useState } from 'react'
import Button from '../../ui/Button/Button'
import TextInput from '../../ui/TextInput/TextInput'

import styles from './SearchBar.module.css'

interface IProps {
  saveSearchQuery: (description: string) => void
}

const SearchBar = ({ saveSearchQuery }: IProps) => {
  const [searchText, setSearchText] = useState('')

  const handleSearchSubmit = () => {
    if (searchText.trim() !== '') {
      saveSearchQuery(searchText.trim())
    }
  }

  const handleSearchChange = (value: string) => {
    setSearchText(value)
  }

  return (
    <div className={styles.searchBar}>
      <TextInput
        className={styles.input}
        placeholder="Search for images..."
        handleChange={handleSearchChange}
        handleKeyDown={handleSearchSubmit}
      />
      <Button
        text="Search"
        className={styles.btn}
        handleAction={handleSearchSubmit}
      />
    </div>
  )
}
export default memo(SearchBar)
