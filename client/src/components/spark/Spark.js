import React from 'react'
import spark from "../../img/spark.jpg"
import classes from "./spark.module.css"

function Spark() {
    return (
        <section className={classes.home} >

            <div className={classes.content}>
                <h3>fresh and <span>organic</span> products for your</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore
                    nisi.</p>
            </div>
        </section>
    )
}

export default Spark