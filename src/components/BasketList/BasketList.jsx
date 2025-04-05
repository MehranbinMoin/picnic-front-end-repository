import { Link } from "react-router"

const BasketList = (props) => {
    return (
        <main>
            {props.baskets.map((basket) => (
                <Link key={basket._id} to={`/baskets/${basket._id}`}>
                    <article>
                        <header>
                            <h2>{basket.description}</h2>
                            <p>
                                {`${basket.author.username} created this basket on ${new Date(basket.createdAt).toLocaleDateString()}`}
                            </p>
                        </header>
                        <p>{basket.image}</p>
                        <p>{basket.city}</p>
                        <p>{basket.email}</p>
                    </article>
                </Link>
            ))}
        </main>
    )
}

export default BasketList