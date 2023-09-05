import React from "react";
import Search from '../Reuse/Search'
import "./box.css"
let Box =()=>{
    return(
        <section id="box">
            <article>
                <div id="betbox">
                    <span>Enter you home details and</span>
                    <span>Get an instant offer.</span>
                    <span>Within 24 hours!</span>
                    <br />
                    <span>
                        <Search/>
                    </span>
                </div>
            </article>
        </section>
    )
}
export default Box;