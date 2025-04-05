import { useParams } from "react-router"
import { useState, useEffect } from "react";
import * as basketService from '../../services/basketService'

const BasketDetails = () => {
    const { basketId } = useParams()
    const [basket, setBasket] = useState(null)

    console.log('basket id is:', basketId);

    useEffect(() => {

        const fetchBasket = async () => {
            const basketData = await basketService.show(basketId)
            setBasket(basketData)
        }
        fetchBasket()
    }, [basketId])

    console.log('basket state', basket);

    if (!basket) return <main>Loading...</main>

    return (
        <main>
            <section>
                <header>
                    <p>{basket.image}</p>
                    <h3>{basket.title}</h3>
                    <h3>{basket.description}</h3>
                    <h3>{basket.city}</h3>
                    <h3>{basket.email}</h3>
                    <p>
                        {`${basket.author.username} created this basket on ${new Date(basket.createdAt).toLocaleDateString()}`}
                    </p>
                </header>
            </section>
        </main>
    )
}

export default BasketDetails