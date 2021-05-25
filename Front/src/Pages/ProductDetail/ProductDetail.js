import { useContext } from 'react'
import Context from '../../GlobalState/Context'


const ProductDetail = () => {

       const { states, setters, requests } = useContext(Context)

    return (
        <div>
            {states.teste}
        </div>
    )
}

export default ProductDetail