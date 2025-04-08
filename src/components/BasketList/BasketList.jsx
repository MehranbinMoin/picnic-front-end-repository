import { Link } from "react-router"
import styles from './BasketList.module.css'

const BasketList = (props) => {

    return (
        <main>
            <div className={styles.CardContainer}>
                {props.baskets.map((basket) => (
                    <Link className={styles.IndividualCard} key={basket._id} to={`/baskets/${basket._id}`}>
                        <article className={styles.Card}>
                            <header className={styles.Header}>
                                <img className={styles.BasketImage}
                                    src={basket.image}
                                    alt={`Image of ${basket.description}`}
                                />
                                <h3>{basket.title}</h3>
                                <h4>{basket.description}</h4>
                                <p>
                                    {`${basket.author.username} created this basket on ${new Date(basket.createdAt).toLocaleDateString()}`}
                                </p>
                            </header>
                        </article>
                    </Link>
                ))}
            </div>
            <footer>© 2025 picnic</footer>
        </main>
    )
}

export default BasketList