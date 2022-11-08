import React from 'react'
import NavBar from './NavBar'

type Props = {}

const Poop = (props: Props) => {
  return (
    <div>
      <NavBar />
      <div className="pt-[70px] pl-[30px]">
        <img src='https://emojipedia-us.s3.amazonaws.com/source/noto-emoji-animations/344/pile-of-poo_1f4a9.gif' />
      </div>
    </div>
  )
}

export default Poop