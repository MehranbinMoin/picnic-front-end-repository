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
                    
                </div>
            </form>
        </main>
    )
}

export default SignUpForm