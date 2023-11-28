import React from 'react'
import "../../Style/Footer.css"
import ImgBackGround from '../ImgBackground/ImgBackGround'
import { facebook, instagram, twitter } from '../Svg/icon'

const url = process.env.PUBLIC_URL + "./assets/"

function Footer() {
  return (
    <div className='Footer'>
      <FooterHeader />
      <ImgBackGround mobil={"bg-footer-top-mobile.svg"}
        desktop={"bg-footer-top-desktop.svg"}
      />
      <FooterBody />
    </div>
  )
}

const FooterHeader = () => {
  return <header>
    <h1>Ready To Build Your Community?</h1>
    <button>Get Started For Free</button>
  </header>
}

const FooterBody = () => {
  return <footer>
    <HandleCard />
    <Newsletter />
  </footer>
}


const HandleCard = () => {
  return <div className='HandleCard'>
    <img className='w-1/2 md:w-56 md:mt-12 ' src={url + "footerlogo.svg"} alt='logo' />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.</p>
    <ul className='flex-col'>
      <li>
        <img src={url + "icon-phone.svg"} alt='phone' />
        <h5>+1-543-123-4567</h5>
      </li>
      <li>
        <img src={url + "icon-email.svg"} alt='phone' />
        <h5>example@huddle.com</h5>
      </li>
    </ul>
    <ul>
      <li>{facebook}</li>
      <li>{instagram}</li>
      <li>{twitter}</li>
    </ul>
  </div>
}

const Newsletter = () => {
  return <div className='Newsletter'>
    <h1>Newsletter</h1>
    <p> To recieve tips on how to grow your community, sign up to our weekly newsletter. We'll never send you spam or pass on your email address</p>
    <form> <div className='subscribe'>

      <input type='email' />
      <button type='submit'>Subscribe</button>
    </div>
    </form>
  </div>
}
export default Footer
