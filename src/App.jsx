import { useContext } from 'react'
import { Routes, Route } from "react-router"
import NavBar from "./components/NavBar/NavBar"
import SignUpForm from "./components/SignUpForm/SignUpForm"
import SignInForm from "./components/SignInForm/SignInForm"
import Landing from "./components/Landing/Landing"
import Dashboard from "./components/Dashboard/Dashboard"
import { UserContext } from "./contexts/UserContext"
import BasketList from './components/BasketList/BasketList'

function App() {
  const { user } = useContext(UserContext)
  return (
    <>
      <NavBar />
      <h1>Picnic</h1>

      <Routes>
        <Route path='/' element={user ? <Dashboard /> : <Landing />} />
        {user ? (
          <>
            <Route path='/baskets' element={<BasketList />} />
          </>
        ) : (
          <>
            <Route path='/sign-up' element={<SignUpForm />} />
            <Route path='/sign-in' element={<SignInForm />} />
          </>
        )}
      </Routes>
    </>
  )
}

export default App
