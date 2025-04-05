import { useParams } from "react-router"

const BasketDetails = () => {
    const { basketId } = useParams()
    console.log('basket id is:', basketId);
    
    return <main>Basket Details</main>
}

export default BasketDetails