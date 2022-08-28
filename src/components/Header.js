import React from 'react'
import style from '../styles/Header.module.css'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className={style.Header}>
     
      <Link to="/explore">
        <img src="./images/search.svg" alt="" />
      </Link>

      <div className={style.Nav_link}>
        <Link to="/friend_invite">
          <img src="./images/invite.svg" alt="" />
        </Link>

        <Link to="/upcoming">
          <img src="./images/calen.svg" alt="" />
        </Link>

        <Link to="/activity">
          <img src="./images/notify.svg" alt="" />
        </Link>

        <Link to="/profile">
          <img src="./images/kenny.png" alt="" className='rounded-2xl' />
        </Link>
      </div>
    </div>
  );
}

export default Header