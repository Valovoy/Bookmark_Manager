import cn from 'classnames'
import styles from './Button.module.css'

interface IButtonProps {
	text: string
	className?: string
	isDisabled?: boolean
	handleAction: () => void
}

const Button = ({
	text,
	className,
	isDisabled,
	handleAction,
}: IButtonProps) => {
	return (
		<button
			type='button'
			disabled={isDisabled}
			onClick={handleAction}
			className={cn(styles.btn, className && className)}
		>
			{text}
		</button>
	)
}
export default Button
