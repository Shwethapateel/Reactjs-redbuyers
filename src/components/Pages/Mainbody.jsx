import React from 'react'
import "./mainbody.css"
import Search from '../Reuse/Search'

let Mainbody=()=> {
  return (
    <section id='body'>
        <article>
        <div id='leftside'>
            <div id='content'>
                <span>Get an Instant offer and sell your home</span>
                <span>
                    <Search/>
                </span>
                <span>Receive an offer within 24 hours, it’s that simple!</span>
            </div>
        </div>
        <div id='rightside'>
                <img src="https://www.redbuyers.com/assets/home_page/img/Hero.png" alt="" />
        </div>
        </article>
    </section>
  )
}

export default Mainbody;