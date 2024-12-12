import { NavLink } from 'react-router'
import styles from './Navigation.module.css'

const Navigation = () => (
	<nav className={styles.navbar}>
		<NavLink to='/' className={styles.link}>
			Search
		</NavLink>
		<NavLink to='/bookmarks' className={styles.link}>
			Bookmarks
		</NavLink>
	</nav>
)

export default Navigation
