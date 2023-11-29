import React from 'react'
import ImgBackGround from '../ImgBackground/ImgBackGround'
import "../../Style/About.css"

const url = process.env.PUBLIC_URL + "./assets/"

function About() {
  return (
    <div className='About'>
      <ImgBackGround
        mobil={"bg-section-top-mobile-1.svg"}
        desktop={"bg-section-top-desktop-1.svg"} />
      <Card
        img={"illustration-grow-together.svg"}
        title={"Grow Together"}
        text={"Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form."}
        stile={"Card"}
      />
      <ImgBackGround
        mobil={"bg-section-bottom-mobile-1.svg"}
        desktop={"bg-section-bottom-desktop-1.svg"} />
      <Card
        img={"illustration-flowing-conversation.svg"}
        title={"Flowing Conversations"}
        text={"You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."}
        stile={"CardR"}
      />
     <ImgBackGround
        mobil={"bg-section-top-mobile-2.svg"}
        desktop={"bg-section-top-desktop-2.svg"} />
      <Card
        img={"illustration-your-users.svg"}
        title={"You Users"}
        text={"It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."}
        stile={"Card"}
      />
      <ImgBackGround
        mobil={"bg-section-bottom-mobile-2.svg"}
        desktop={"bg-section-bottom-desktop-2.svg"} />
    </div>
  )
}

const Card = ({ img, title, text, stile }) => {
  return <div className={stile}>
    <div>
      <h1>{title}</h1>
      <h5>{text}</h5>
    </div>
    <img src={url + img} alt='img'  />
  </div>
}



export default About
