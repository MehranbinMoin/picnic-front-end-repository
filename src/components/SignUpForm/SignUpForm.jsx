import { useState } from "react";
import { useNavigate } from "react-router";
import { signUp } from "../../services/authService";

const SignUpForm = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        passwordConfirmation: '',
    })
    const [message, setMessage] = useState('')

    const handleChange = (event) => {
        setMessage('')
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const newUser = await signUp(formData)
            console.log(newUser);
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
        <main>
            <h1>Sign up</h1>
            <p>{message}</p>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="passwordConfirmation">Confirm password: </label>
                    <input
                        type="text"
                        id="passwordConfirmation"
                        name="passwordConfirmation"
                        value={formData.passwordConfirmation}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <button disabled={isFormInvalid()} type="submit">Sign up</button>
                    <button onClick={() => navigate('/')}>Cancel</button>
                </div>
            </form>
        </main>
    )
}

export default SignUpForm