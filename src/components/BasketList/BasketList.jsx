import { useState } from "react"
import { Link } from "react-router"
import styles from './BasketList.module.css'

const BasketList = (props) => {
    const [searchTerm, setSearchTerm] = useState('')

    const filteredBaskets = props.baskets.filter(basket =>
        basket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        basket.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (basket.city && basket.city.toLowerCase().includes(searchTerm.toLowerCase()))
    )

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    }

    return (
        <div className="content-container">
            <main>
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        placeholder="Search by keyword or city...hope you find something delish!"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className={styles.searchBar}
                    />
                </div>
                <div className={styles.CardContainer}>
                    {filteredBaskets.map((basket) => (
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
                    {filteredBaskets.length === 0 && (
                        <div className={styles.noResults}>
                            <p>No baskets match your search.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}

export default BasketList