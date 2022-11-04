import React from 'react'
import NavBar from './NavBar'

type Props = {}

const Poop = (props: Props) => {
  return (
    <div>
      <NavBar />
      <img src='https://emojipedia-us.s3.amazonaws.com/source/noto-emoji-animations/344/pile-of-poo_1f4a9.gif' />
    </div>
  )
}

export default Poop