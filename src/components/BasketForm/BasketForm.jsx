import { useState } from "react"

const BasketForm = (props) => {
    const [formData, setFormData] = useState({
        image: '',
        title: '',
        description: '',
        city: '',
        email: '',
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleAddBasket(formData)
        
    }

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <label htmlFor="image">Photo</label>
                <input
                    type="text"
                    required
                    name="image"
                    id="image"
                    value={formData.image}
                    onChange={handleChange}
                />

                <label htmlFor="title">Basket Title</label>
                <input
                    type="text"
                    required
                    name="title"
                    id="title"
                    value={formData.title}
                    onChange={handleChange}
                />

                <label htmlFor="description">Basket Description</label>
                <textarea
                    type="text"
                    required
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                />

                <label htmlFor="city">City Location</label>
                <input
                    type="text"
                    required
                    name="city"
                    id="city"
                    value={formData.city}
                    onChange={handleChange}
                />

                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    required
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <button type="submit">Create Basket</button>
            </form>
        </main>
    )
}

export default BasketForm