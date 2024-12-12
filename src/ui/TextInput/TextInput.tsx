import cn from 'classnames'
import { useState } from 'react'
import styles from './TextInput.module.css'

interface ITextInputProps {
  placeholder: string
  handleChange: (value: string) => void
  handleKeyDown: () => void
  className?: string
}

const TextInput = ({
  placeholder,
  handleChange,
  handleKeyDown,
  className,
}: ITextInputProps) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setInputValue(value)
    handleChange(value)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleKeyDown()
    }
  }

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={handleKeyPress}
      className={cn(styles.input, className && className)}
    />
  )
}

export default TextInput
