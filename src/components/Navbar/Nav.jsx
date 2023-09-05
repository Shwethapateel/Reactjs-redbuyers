import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Center from './Center'

const Nav = () => {
  return (
    <section id='main'>
      <article>
        <Logo />
        <Center />
        <Menu/>
      </article>
    </section>
  )
}

export default Nav