import React from 'react'
import NavBar from './NavBar'

type Props = {}

const Pee = (props: Props) => {
  return (
    <div>
      <NavBar />
      <div className="pt-[70px] pl-[30px]">
        <img src='http://www.beatricebiologist.com/wp-content/uploads/2011/07/happypee-300x240.png' />
      </div>
    </div>
  )
}

export default Pee