import { useContext } from 'react'
import Context from '../../GlobalState/Context'
import Header from '../../Components/Header/Header'
import BodyMain from '../../Components/BodyMain/BodyMain'

import {Screen} from "./Screen/screen_styled"

const MainPage = () => {

       const { states, setters, requests } = useContext(Context)

    return (
        <Screen>
                <Header/>
                <BodyMain/>
        </Screen>
    )
}

export default MainPage