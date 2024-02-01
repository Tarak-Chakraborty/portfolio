import React from 'react'
import Links from '../Links'

function Contact() {
  return (
    // main div
    <div  className='p-24 pt-16'>
      {/* child div */}
      <div className='mb-20'>
        <h1 className='font-sans text-5xl font-bold tracking-tight text-left pb-11 leading-tight text-gray-800'>
          Let's Get in Touch: Ways to <br/>Connect with Me
        </h1>
        <h3 className='text-left leading-relaxed text-gray-400'>
          Thank you for your interest in getting in touch with me.
          I welcome your feedback, questions, and suggestions.
          If you have a specific question or comment, 
          please feel free to email me directly at <a href="mailto:chakrabortytarak83@gmail.com" className='text-blue-500'>chakrabortytarak83@gmail.com</a>. 
          I make an effort to respond to all messages within 24 hours, 
          although it may take me longer during busy periods. 
          Finally, if you prefer to connect on social media, you can find me 
          on <a href="https://www.instagram.com/" className='text-blue-500'>https://instagram.com/</a>. I post regular updates and engage with my 
          followers there, so don't hesitate to reach out. Thanks again for your 
          interest, and I look forward to hearing from you!
        </h3>
      </div>
      {/* second child div */}
      <div>
        <Links />
      </div>
    </div>
  )
}

export default Contact