import React from "react";
import "./buildpage.css"
import Midhome from "../../assets/midHome.png"
import Steps from "../../assets/Steps.png"
let Buildpage =()=>{
    return(
        <section id="buildpage">
            <article>
            <div id="Cont">
                <img src="https://www.redbuyers.com/assets/home_page/img/House.jpg" alt="" />
                <span>Let’s See How it Works</span>
                <span>Here’s how we make it easier to sell your home</span>
            </div>
            <div id="mid">
                <div>
                    <img src={Midhome} alt="" />
                </div>
                <div id="step">
                    <img height={300} width={300} src={Steps} alt="" />
                </div>
            </div>
            </article>
        </section>
    )
}
export default Buildpage;