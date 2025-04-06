import { useContext, useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from "react-router"
import NavBar from "./components/NavBar/NavBar"
import SignUpForm from "./components/SignUpForm/SignUpForm"
import SignInForm from "./components/SignInForm/SignInForm"
import Landing from "./components/Landing/Landing"
import Dashboard from "./components/Dashboard/Dashboard"
import { UserContext } from "./contexts/UserContext"
import BasketList from './components/BasketList/BasketList'
import BasketDetails from './components/BasketDetails/BasketDetails'
import * as basketService from './services/basketService'
import BasketForm from './components/BasketForm/BasketForm'
import CommentForm from './components/CommentForm/CommentForm'


function App() {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  const [baskets, setBaskets] = useState([])

  useEffect(() => {
    const fetchAllBaskets = async () => {
      const basketsData = await basketService.index()
      setBaskets(basketsData)
    }
    if (user) fetchAllBaskets()
  }, [user])

  const handleAddBasket = async (basketFormData) => {
    const newBasket = await basketService.create(basketFormData)
    setBaskets([newBasket, ...baskets])
    navigate('/baskets')
  }

  const handleDeleteBasket = async (basketId) => {
    const deletedBasket = await basketService.deleteBasket(basketId)
    setBaskets(baskets.filter((basket) => basket._id !== basketId));
    navigate('/baskets');
  }

  const handleUpdateBasket = async (basketId, basketFormData) => {
    const updatedBasket = await basketService.update(basketId, basketFormData);
    setBaskets(baskets.map((basket) => (basketId === basket._id ? updatedBasket : basket)));
    navigate(`/baskets/${basketId}`);
  }

  return (
    <>
      <NavBar />
      <h1>Picnic</h1>

      <Routes>
        <Route path='/' element={user ? <Dashboard /> : <Landing />} />
        {user ? (
          <>
            <Route path='/baskets' element={<BasketList baskets={baskets} />} />
            <Route path='/baskets/:basketId/comments/:commentId/edit' element={<CommentForm />} />
            <Route path='/baskets/:basketId' element={<BasketDetails handleDeleteBasket={handleDeleteBasket} />} />
            <Route path='/baskets/new' element={<BasketForm handleAddBasket={handleAddBasket} />} />
            <Route path='/baskets/:basketId/edit' element={<BasketForm handleUpdateBasket={handleUpdateBasket} />}
            />
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
