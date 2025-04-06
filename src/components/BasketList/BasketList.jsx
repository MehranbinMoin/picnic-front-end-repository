import { Link } from "react-router"
import styles from './BasketList.module.css'

const BasketList = (props) => {
    return (
        <main>
            <div className={styles.CardContainer}>
            {props.baskets.map((basket) => (
                <Link className={styles.IndividualCard} key={basket._id} to={`/baskets/${basket._id}`}>
                    <article>
                        <header className={styles.Header}>
                            <img className={styles.BasketImage} src={basket.image} alt={`Image of ${basket.description}`}></img>
                            <h2>{basket.description}</h2>
                            <p>
                                {`${basket.author.username} created this basket on ${new Date(basket.createdAt).toLocaleDateString()}`}
                            </p>
                        </header>
                        <p>{basket.title}</p>
                    </article>
                </Link>
            ))}
            </div>
        </main>
    )
}

export default BasketList