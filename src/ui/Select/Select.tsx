import { useState } from 'react'
import styles from './Select.module.css'

interface ISelectProps {
	placeholder: string
	optionList: string[]
	handleChange: (value: string) => void
}

const Select = ({ placeholder, optionList, handleChange }: ISelectProps) => {
	const [selectValue, setSelectValue] = useState('')

	const handleSelectChange = (value: string) => {
		setSelectValue(value)
		handleChange(value)
	}

	return (
		<select
			value={selectValue}
			className={styles.select}
			onChange={e => handleSelectChange(e.target.value)}
		>
			<option value='' disabled hidden>
				{placeholder}
			</option>
			{optionList.map(item => (
				<option key={item} value={item}>
					{item}
				</option>
			))}
		</select>
	)
}
export default Select
