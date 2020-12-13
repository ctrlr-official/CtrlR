import React, { useState } from 'react'
import './NewsFeed.css'
import { Link } from 'react-router-dom'

const NewsFeed = () => {
  const [check, setCheck] = useState(false)

  return (
    <div className='NFW'>
      <Link to='/cards'>
        <div className='underNewsFeed' />
      </Link>
      <div
        onClick={() => setCheck(!check)}
        className={check ? 'transformed' : 'NewsFeed'}
      />
    </div>
  )
}


export default NewsFeed