import React from 'react'
import './navbar.css'

function FeedNav() {
  
  return (
    <div className='feed-nav'>
        <div className='logo'>
            <img onClick={()=>window.scroll(0,0)} src="https://www.guardianlife.com/logo-dark.svg" alt="logo" />
        </div>
        <div className='nav-link'>
            <ul>
                <li><b>Username</b></li> 
                <li><b><a href="/home">LogOut</a></b></li>
            </ul>
        </div>
    </div>
  )
}

export default FeedNav