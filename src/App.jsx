import { Routes, Route } from "react-router"
import NavBar from "./components/NavBar/NavBar"
import SignUpForm from "./components/SignUpForm/SignUpForm"
import SignInForm from "./components/SignInForm/SignInForm"

function App() {
  return (
    <>
      <NavBar />
      <h1>Picnic</h1>

      <Routes>
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/sign-in' element={<SignInForm />} />
      </Routes>
    </>
  )
}

export default App
