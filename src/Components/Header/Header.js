import React from 'react'
import "../../Style/Header.css"
const url = process.env.PUBLIC_URL + "./assets/"


function Header() {
  return (
    <div className='Header'>
      <TopHeader />

      <BodyHeader/>
    </div>
  )
}

const TopHeader = () => {
  return <header>
    <img className='w-1/6' src={url + "/logo.svg"} alt="logo" />
    <button>Try it Free</button>

  </header>
}
const BodyHeader = () => {
  return <div className='BodyHeader'>
    <BodyHeaderTitle />
    <img src={url+"screen-mockups.svg"} alt='svg'/>
    <BodyFooter />
  </div>
}

const BodyHeaderTitle = () => {
  return <section>
    <h1>Build The Community Your Fans Will Love</h1>
    <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
    <button>Get Started For Free</button>
  </section>
}

const BodyFooter = () => {
  return <footer>
    <BodyFooterCard
      icon={"icon-communities.svg"}
      text={"Communities Formed"}
      count={"1.4k+"}
    />
    <BodyFooterCard
      icon={"icon-messages.svg"}
      text={"Communities Formed"}
      count={"2.7m+"}
    />
  </footer>
}

const BodyFooterCard = ({ icon, text, count }) => {
  return <div className='BodyFooterCard'>
    <img src={url + icon} alt='icon' />
    <h1>{count}</h1>
    <p className='text-gray-400'>{text}</p>
  </div>
}

export default Header
