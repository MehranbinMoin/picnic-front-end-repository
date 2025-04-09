import { useParams, Link } from "react-router"
import { useState, useEffect, useContext } from "react";
import CommentForm from "../CommentForm/CommentForm";
import { UserContext } from "../../contexts/UserContext";
import * as basketService from '../../services/basketService'
import styles from './BasketDetails.module.css'

const BasketDetails = (props) => {
    const { basketId } = useParams()
    const { user } = useContext(UserContext)
    const [basket, setBasket] = useState(null)

    const handleAddComment = async (commentFormData) => {
        const newComment = await basketService.createComment(basketId, commentFormData);
        setBasket({ ...basket, comments: [...basket.comments, newComment] });
    }

    const handleDeleteComment = async (commentId) => {
        console.log('commentId', commentId);
        try {
            await basketService.deleteComment(basket._id, commentId)
        } catch (error) {
            console.error('Could not delete comment:', error)
        }
        setBasket({ ...basket, comments: basket.comments.filter((comment) => comment._id !== commentId) })
    }

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
        <div className={styles.container}>
            <main className={styles.form}>
                <section>
                    <header>
                        <p>
                            {`${basket.author.username} created this basket on ${new Date(basket.createdAt).toLocaleDateString()}`}
                        </p>
                        <br></br>
                        <div className={styles.imageContainer}>
                            <img className={styles.BasketImage} src={basket.image} alt={`Image of ${basket.description}`}></img>
                        </div>
                        <h3>{basket.title}</h3>
                        <h3>Description: {basket.description}</h3>
                        <h3>Basket is located in {basket.city}</h3>
                        <h3>Contact information: {basket.email}</h3>
                        {basket.author._id === user._id && (
                            <div className={styles.editPlusDeleteButtons}>
                                <button className={styles.editBasketButton}>
                                    <Link className={styles.editBasketButtonColor} to={`/baskets/${basketId}/edit`}>Edit Basket</Link>
                                </button>
                                <button className={styles.button} onClick={() => props.handleDeleteBasket(basketId)}>Delete Basket</button>
                            </div>
                        )}
                    </header>
                    <p>{basket.text}</p>
                </section>
                <section className={styles.commentSection}>
                    <h2>Comments</h2>
                    <CommentForm handleAddComment={handleAddComment} />
                    <br></br>
                    {!basket.comments.length && <p>No comments</p>}
                    {basket.comments.map((comment) => (
                        <article className={styles.individualComment} key={comment._id}>
                            <header className={styles.commentHeader}>
                                <p>
                                    {`${comment.author.username} posted on ${new Date(comment.createdAt).toLocaleDateString()}`}
                                </p>
                                {comment.author._id === user._id && (
                                    <div className={styles.editPlusDeleteButtons}>
                                        <button className={styles.editCommentButton}>
                                            <Link className={styles.editCommentButtonColor} to={`/baskets/${basket._id}/comments/${comment._id}/edit`}>Edit comment</Link>
                                        </button>
                                        <button className={styles.button} onClick={() => handleDeleteComment(comment._id)}>Delete comment</button>
                                    </div>
                                )}
                            </header>
                            <div>
                                {comment.text}
                            </div>
                        </article>
                    ))}
                </section>
            </main>
        </div>
    )
}

export default BasketDetails