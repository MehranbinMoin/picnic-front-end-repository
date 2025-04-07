import { useContext } from "react"
import { Link } from "react-router"
import styles from './NavBar.module.css'
import { UserContext } from "../../contexts/UserContext"

const NavBar = () => {
  const { user, setUser } = useContext(UserContext)
  
  const handleLogOut = () => {
    localStorage.removeItem('token')
    setUser(null)
  }
  
  return (
    <nav className={styles.container}>
      {user ? (
        <ul className={styles.navList}>
          <li className={styles.welcomeItem}>
            Welcome, {user.username}!
          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/baskets'>Baskets</Link>
          </li>
          <li>
            <Link to='/baskets/new'>Create Basket</Link>
          </li>
          <li>
            <Link to='/' onClick={handleLogOut}>Log out</Link>
          </li>
        </ul>
      ) : (
        <ul className={styles.navList}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/sign-up'>Sign up</Link>
          </li>
          <li>
            <Link to='/sign-in'>Log in</Link>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default NavBar