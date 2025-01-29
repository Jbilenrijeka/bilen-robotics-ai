import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white text-center py-4'>
      <p>&copy; 2025 Bilen Robotics & A.I. All rights reserved.</p>
      <div className='mt-2'>
        <a
          href='https://www.facebook.com'
          target='_blank'
          rel='noopener noreferrer'
          className='px-2 hover:underline'
        >
          Facebook
        </a>
        <a
          href='https://www.twitter.com'
          target='_blank'
          rel='noopener noreferrer'
          className='px-2 hover:underline'
        >
          Twitter
        </a>
        <a
          href='https://www.linkedin.com'
          target='_blank'
          rel='noopener noreferrer'
          className='px-2 hover:underline'
        >
          LinkedIn
        </a>
        <a
          href='https://www.youtube.com'
          target='_blank'
          rel='noopener noreferrer'
          className='px-2 hover:underline'
        >
          YouTube
        </a>
        <a
          href='https://www.tiktok.com'
          target='_blank'
          rel='noopener noreferrer'
          className='px-2 hover:underline'
        >
          TikTok
        </a>
      </div>
    </footer>
  )
}

export default Footer
