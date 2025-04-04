import { useState } from "react";
import { useNavigate } from "react-router";

const SignUpForm = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        passwordConfirmation: '',
    })
    const [message, setMessage] = useState('')

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
                    <button type="submit">Sign up</button>
                    <button>Cancel</button>
                </div>
            </form>
        </main>
    )
}

export default SignUpForm