import React from 'react'
import "./downmid.css"
import Star from "../../assets/Star.png"
export const Downmid = () => {
  return (
    <section id='downmid'>
        <article>
            <div id='info'>
                <img src={Star} alt="" />
                <span>Don’t take our word for it.</span>
                <span>Take theirs...</span>
                <span>Listen to what our customers have to say.</span>
            </div>
        </article>
    </section>
  )
}
