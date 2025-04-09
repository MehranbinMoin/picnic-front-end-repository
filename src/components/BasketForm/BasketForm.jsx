import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router"
import * as basketService from '../../services/basketService'
import UploadWidget from "../UploadWidget";
import styles from './BasketForm.module.css'
import { UserContext } from "../../contexts/UserContext";


const BasketForm = (props) => {
    const { user } = useContext(UserContext)
    console.log(user);
    const { basketId } = useParams()
    console.log(basketId);
    const [formData, setFormData] = useState({
        image: '',
        title: '',
        description: '',
        city: '',
        email: '',
    })

//  author._id

    const [basketDetails, setBasketDetails] = useState({})

    useEffect(() => {
        const fetchBasket = async () => {
            const basketData = await basketService.show(basketId);
            setFormData(basketData);
            setBasketDetails(basketData)
            console.log(basketData);
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
    <>
    { basketDetails?.author?._id === user._id ? 
    (<main className={styles.form}>
        <h1>{basketId ? 'Edit basket' : 'New basket'}</h1>
        <form onSubmit={handleSubmit}>
            <label>Photo of basket</label>
            <UploadWidget formData={formData} setFormData={setFormData}/>
            <br></br>
            <label htmlFor="title">Basket Title</label>
            <input
                className={styles.formInput}
                type="text"
                required
                name="title"
                id="title"
                value={formData.title}
                onChange={handleChange}
            />
            <br></br>
            <label htmlFor="description">Basket Description</label>
            <textarea
                className={styles.formInput}
                type="text"
                required
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
            />
            <br></br>
            <label htmlFor="city">City Location</label>
            <input
                className={styles.formInput}
                type="text"
                required
                name="city"
                id="city"
                value={formData.city}
                onChange={handleChange}
            />
            <br></br>
            <label htmlFor="email">Email</label>
            <input
                className={styles.formInput}
                type="text"
                required
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
            />
            <br></br>
            <button className={styles.button} type="submit">Create Basket</button>
        </form>
    </main>) : (<>
    <h1>You don't have permission to edit this basket!</h1>
    </>)
} </>
)
}
export default BasketForm;
