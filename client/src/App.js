import Footer from "./components/footer/Footer"
import {BrowserRouter} from "react-router-dom"
import AppRouter from "./links/AppRouter"
import HeaderK from "./components/headerK/HeaderK"
import Spark from "./components/spark/Spark"


function App() {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <Spark/>
                <HeaderK/>
                <AppRouter/>
                {/*<Footer/>*/}
            </BrowserRouter>
        </div>
    )
}

export default App
