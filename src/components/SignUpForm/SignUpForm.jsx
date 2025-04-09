import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { signUp } from "../../services/authService";
import { UserContext } from "../../contexts/UserContext";
import styles from './SignUpForm.module.css'
import FooterLogo from "../../assets/Photos/footer.png"

const SignUpForm = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        passwordConfirmation: '',
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
            const newUser = await signUp(formData)
            setUser(newUser)
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
        if (formData.password !== formData.passwordConfirmation) {
            return true
        }
    }

    return (
        <div className="content-container">
        <main className={styles.form}>
            <h1>Sign up</h1>
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
                    <label htmlFor="passwordConfirmation">Confirm password: </label>
                    <input
                        className={styles.formInput}
                        type="text"
                        id="passwordConfirmation"
                        name="passwordConfirmation"
                        value={formData.passwordConfirmation}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br></br>
                <div>
                    <button className={styles.button} disabled={isFormInvalid()} type="submit">Sign up</button>
                    <br></br>
                    <br></br>
                    <button className={styles.button} onClick={() => navigate('/')}>Cancel</button>
                </div>
            </form>
        </main>
        </div>
    )
}

export default SignUpForm