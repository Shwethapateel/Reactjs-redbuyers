import React from 'react'
import "./footer.css"
let Footer =()=>{
    return(
        <section id='foot'>
            <article>
                <div id='up'>
                    <div id='a1'>
                        <span>BUY & SELL</span>
                        <li>Sell</li>
                        <li>Browse Home</li>
                        <li>Cash Offer</li>
                        <li>Buy</li>
                        <li>New Construction</li>
                        <li>Pricing</li>
                        <li>Down Payment</li>
                    </div>
                    <div id='a2'>
                        <span>INVESTMENT</span>
                        <li>Co-Investment</li>
                        <li>Patnership Buying</li>
                    </div>
                    <div id='a3'>
                        <span>COMPANY</span>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Vendors</li>
                        <li>Careers</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </div>
                    <div id='a4'>
                        <span>LEARN</span>
                        <li>Seller FAQs</li>
                        <li>Buyer FAQss</li>
                        <li>Blogs</li>
                        <li>Mortgage Calculator</li>
                    </div>
                    <div id='a5'>
                        <span>LOCATIONS</span>
                        <li>Greater Toronto Area</li>
                        <li>Region of Peel</li>
                        <li>Region of Hamilton</li>
                        <li>Region of Waterloo</li>
                        <li>View All Locations</li>
                        <input value="Map Search" type="button" id='btn' />
                    </div>
                </div><br /> <br />
                <div id='line'></div>
            </article>
        </section>
    )
}
export default Footer;