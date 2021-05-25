import { useContext } from 'react'
import Context from '../../GlobalState/Context'
import Header from '../../Components/Header/Header'

const MainPage = () => {

       const { states, setters, requests } = useContext(Context)

    return (
        <div>
                <Header/>
        </div>
    )
}

export default MainPage