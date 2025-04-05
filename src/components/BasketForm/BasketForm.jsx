import { useState, useEffect } from "react"
import { useParams } from "react-router"
import * as basketService from '../../services/basketService'


const BasketForm = (props) => {
    const { basketId } = useParams();
    console.log(basketId);
    const [formData, setFormData] = useState({
        image: '',
        title: '',
        description: '',
        city: '',
        email: '',
    })

    useEffect(() => {
        const fetchBasket = async () => {
          const basketData = await basketService.show(basketId);
          setFormData(basketData);
        };
        if (basketId) fetchBasket();
        return () => setFormData({ image: '', title: '', description: '', email: '', city: '' })
      }, [basketId]);

    const handleSubmit = (event) => {
        event.preventDefault()
        if (basketId) {
            props.handleUpdateBasket(basketId, formData);
          } else {
            props.handleAddBasket(formData)
          }
    }

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    return (
        <main>
            <h1>{basketId ? 'Edit basket' : 'New basket'}</h1>
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