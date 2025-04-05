const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/baskets`;

const index = async () => {
    try {
        const res = await fetch(BASE_URL, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        return res.json()
    } catch (error) {
        console.log(error);

    }
}

const show = async (basketId) => {
    try {
        const res = await fetch(`${BASE_URL}/${basketId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        return res.json()
    } catch (error) {
        console.log(error);

    }
}

export {
    index,
    show,
}