import React from "react";
import "./search.css"
let Search =()=>{
    return(
        <div>
            <div>
                <img id="icon" src="https://www.redbuyers.com/assets/home_page/img/map-pin.png" alt=""  />
                <input type="text"  id="inp" placeholder="Where’s your house?"/>
                <button>Get my free offer</button>
            </div>
        </div>
    )
}
export default Search;