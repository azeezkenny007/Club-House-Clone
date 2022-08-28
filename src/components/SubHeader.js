import React from 'react'
import style from '../styles/explore.module.css'
import {Link} from 'react-router-dom'

function SubHeader({pageTitle}) {
  return (
    <div className={style.head}>
      <Link to="/home">
        <img src="./images/arrow.png" alt="" />
      </Link>

      <div className="mr-2">
        <h3>{pageTitle}</h3>
      </div>
    </div>
  );
}

export default SubHeader