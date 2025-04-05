import { useParams, Link } from "react-router"
import { useState, useEffect, useContext } from "react";
import CommentForm from "../CommentForm/CommentForm";
import { UserContext } from "../../contexts/UserContext";
import * as basketService from '../../services/basketService'

const BasketDetails = (props) => {
    const { basketId } = useParams()
    const { user } = useContext(UserContext)
    const [basket, setBasket] = useState(null)

    const handleAddComment = async (commentFormData) => {
        const newComment = await basketService.createComment(basketId, commentFormData);
        setBasket({ ...basket, comments: [...basket.comments, newComment] });
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
                    {basket.author._id === user._id && (
                        <>
                            <Link to={`/baskets/${basketId}/edit`}>Edit</Link>
                            <button onClick={() => props.handleDeleteBasket(basketId)}>Delete</button>
                        </>
                    )}
                </header>
                <p>{basket.text}</p>
            </section>
            <section>
                <h2>Comments</h2>
                <CommentForm handleAddComment={handleAddComment} />
                {!basket.comments.length && <p>No comments</p>}
                {basket.comments.map((comment) => (
                    <article key={comment._id}>
                        <header>
                            <p>
                                {`${comment.author.username} posted on ${new Date(comment.createdAt).toLocaleDateString()}`}
                            </p>
                        </header>
                        <p>
                            {comment.text}
                        </p>
                    </article>
                ))}
            </section>
        </main>
    )
}

export default BasketDetails