import { useContext, useState, useEffect } from 'react'
import { Routes, Route } from "react-router"
import NavBar from "./components/NavBar/NavBar"
import SignUpForm from "./components/SignUpForm/SignUpForm"
import SignInForm from "./components/SignInForm/SignInForm"
import Landing from "./components/Landing/Landing"
import Dashboard from "./components/Dashboard/Dashboard"
import { UserContext } from "./contexts/UserContext"
import BasketList from './components/BasketList/BasketList'
import BasketDetails from './components/BasketDetails/BasketDetails'
import * as basketService from './services/basketService'

function App() {
  const { user } = useContext(UserContext)

  const [baskets, setBaskets] = useState([])

  useEffect(() => {
    const fetchAllBaskets = async () => {
      const basketsData = await basketService.index()
      setBaskets(basketsData)
    }
    if (user) fetchAllBaskets()
  }, [user])

  return (
    <>
      <NavBar />
      <h1>Picnic</h1>

      <Routes>
        <Route path='/' element={user ? <Dashboard /> : <Landing />} />
        {user ? (
          <>
            <Route path='/baskets' element={<BasketList baskets={baskets} />} />
            <Route path='/baskets/:basketId' element={<BasketDetails />} />
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
