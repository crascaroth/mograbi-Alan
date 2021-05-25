import { useContext } from 'react'
import Context from '../../GlobalState/Context'


const Header = () => {

       const { states, setters, requests } = useContext(Context)

    return (
        <div>
            {states.teste}
        </div>
    )
}

export default Header