import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import * as basketService from '../../services/basketService'
import styles from './CommentForm.module.css'

const CommentForm = (props) => {
    const [formData, setFormData] = useState({ text: '' });

    const { basketId, commentId } = useParams();
    console.log(basketId, commentId);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchBasket = async () => {
            const basketData = await basketService.show(basketId);
            setFormData(basketData.comments.find((comment) => comment._id === commentId));
        };
        if (basketId && commentId) fetchBasket();
    }, [basketId, commentId]);

    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        if (basketId && commentId) {
            await basketService.updateComment(basketId, commentId, formData);
            navigate(`/baskets/${basketId}`);
        } else {
            props.handleAddComment(formData);
        }
        setFormData({ text: '' });
    }

    return (
        <div className="content-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor='text-input'>Your comments:</label>
                <br></br>
                <textarea
                    className={styles.formInput}
                    required
                    type='text'
                    name='text'
                    id='text-input'
                    value={formData.text}
                    onChange={handleChange}
                />
                <br></br>
                <button className={styles.button} type='submit'>Add Comment</button>
            </form>
        </div>
    );
};

export default CommentForm;