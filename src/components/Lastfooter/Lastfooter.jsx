import React from "react";
import "./lastfooter.css"
import Fb from "../../assets/facebook.jpg"
import Tw from "../../assets/twitter.png"
import Lkn from "../../assets/linkedin.png"
import Insta from "../../assets/instagram.png"
import Phone from "../../assets/phone.png"
import Email from "../../assets/Email.png"
let Lastfooter =()=>{
    return(
        <section id="downfooter">
            <article>
                <div id="footercont">
                    <p>CONTACT US</p>
                    <div id="pic">
                        <img src={Fb} alt="" />
                        <img src={Tw} alt="" />
                        <img src={Lkn} alt="" />
                        <img src={Insta} alt="" />
                    </div>
                    <pre><img src={Phone} alt="" />   905-567-0200</pre>
                    <pre><img src={Email} alt="" /> info@redbuyers.com</pre>
                    <p>© 2021 redbuyers.com. All rights reserved.</p>
                    <p>RedBuyers Realty. Brokerage, is fully registered under the Real Estate and Business brokerage, Act, 2002 of Ontario.</p>
                </div>
            </article>
        </section>
    )
}
export default Lastfooter;