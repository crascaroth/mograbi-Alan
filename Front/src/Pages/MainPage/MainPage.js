import { useContext } from 'react'
import Context from '../../GlobalState/Context'
import Header from '../../Components/Header/Header'
import BodyMain from '../../Components/BodyMain/BodyMain'

const MainPage = () => {

       const { states, setters, requests } = useContext(Context)

    return (
        <div>
                <Header/>
                <BodyMain/>
        </div>
    )
}

export default MainPage