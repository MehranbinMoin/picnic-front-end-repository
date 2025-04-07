import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { signIn } from "../../services/authService";
import { UserContext } from "../../contexts/UserContext";
import styles from './SignInForm.module.css'

const SignInForm = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })
    const [message, setMessage] = useState('')

    const { setUser } = useContext(UserContext)

    const handleChange = (event) => {
        setMessage('')
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const signedInUser = await signIn(formData)
            setUser(signedInUser)
            navigate('/')
        } catch (err) {
            setMessage(err.message)
        }
    }

    const isFormInvalid = () => {
        if (formData.username === '') {
            return true
        }
        if (formData.password === '') {
            return true
        }
    }

    return (
        <main className={styles.form}>
            <h1>Log in</h1>
            <p>{message}</p>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input
                        className={styles.formInput}
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br></br>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        className={styles.formInput}
                        type="text"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br></br>
                <div>
                    <button className={styles.button} disabled={isFormInvalid()} type="submit">Log in</button>
                    <br></br>
                    <br></br>
                    <button className={styles.button} onClick={() => navigate('/')}>Cancel</button>
                </div>
            </form>
        </main>
    )
}

export default SignInForm