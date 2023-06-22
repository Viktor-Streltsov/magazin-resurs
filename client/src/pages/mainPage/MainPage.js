import React from 'react'
import HeadBlock from "../../components/headBlock/HeadBlock"
import ProductsPage from "../productsPage/ProductsPage"
import Spark from "../../components/spark/Spark"
import Reviews from "../../components/reviews/Reviews"
import Answers from "../../components/answers/Answers"
import PayPage from "../payPage/PayPage"

function MainPage() {

    return (
        <div>
            {/*<Spark/>*/}
            <ProductsPage/>
            <Reviews/>
        </div>
    )
}

export default MainPage