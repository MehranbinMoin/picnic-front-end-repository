import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import * as basketService from '../../services/basketService'

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

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (basketId && commentId) {
            basketService.updateComment(basketId, commentId, formData);
            navigate(`/baskets/${basketId}`);
        } else {
            props.handleAddComment(formData);
        }
        setFormData({ text: '' });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='text-input'>Your comment:</label>
            <textarea
                required
                type='text'
                name='text'
                id='text-input'
                value={formData.text}
                onChange={handleChange}
            />
            <button type='submit'>Add Comment</button>
        </form>
    );
};

export default CommentForm;