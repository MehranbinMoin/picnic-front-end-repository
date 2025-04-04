import { useContext } from "react"
import { Link } from "react-router"

import { UserContext } from "../../contexts/UserContext"

const NavBar = () => {
  const { user, setUser } = useContext(UserContext)

  const handleLogOut = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  return (
    <nav>
      {user ? (
        <dl>
          <dt>
            Welcome, {user.username}!
          </dt>
          <dl>
            <Link to='/'>Home</Link>
          </dl>
          <dl>
            <Link to='/baskets'>Baskets</Link>
          </dl>
          <dl>
            <Link to='/baskets/new'>Create Basket</Link>
          </dl>
          <dl>
            <Link to='/' onClick={handleLogOut}>Log out</Link>
          </dl>
        </dl>
      ) : (
        <dl>
            <dl>
            <Link to='/'>Home</Link>
            </dl>
          <dt>
            <Link to='/sign-up'>Sign up</Link>
          </dt>
          <dt>
          <Link to='/sign-in'>Log in</Link>
          </dt>
        </dl>
      )}
    </nav>
  )
}

export default NavBar