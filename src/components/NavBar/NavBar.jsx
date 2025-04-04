import { useContext } from "react"
import { Link } from "react-router"

import { UserContext } from "../../contexts/UserContext"

const NavBar = () => {
  const { user } = useContext(UserContext)

  return (
    <nav>
      {user ? (
        <dl>
          <dt>
            Welcome, {user.username}!
          </dt>
        </dl>
      ) : (
        <dl>
          <dt>
            <Link to='/sign-up'>Sign up</Link>
          </dt>
        </dl>
      )}
    </nav>
  )
}

export default NavBar