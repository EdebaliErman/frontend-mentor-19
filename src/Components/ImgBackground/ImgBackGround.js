import React from 'react'

function ImgBackGround({desktop,mobil}) {
    const url= process.env.PUBLIC_URL+"./assets/"
  return (
    <>
      <img className='w-full sm:hidden md:hidden'  src={url+desktop} alt='img'/>
      <img className='w-full hidden sm:flex md:flex'  src={url+mobil} alt='img'/>
    </>
  )
}

export default ImgBackGround
