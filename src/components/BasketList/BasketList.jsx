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
                        <p>{basket.title}</p>
                    </article>
                </Link>
            ))}
        </main>
    )
}

export default BasketList