import React from 'react'
import exploreStyle from '../styles/explore.module.css'
import style from '../styles/profile.module.css'
import {Link} from 'react-router-dom'
import {BsAt,BsUpload,BsPlus} from 'react-icons/bs'
import { AiOutlineInstagram, AiOutlineSetting, AiOutlineTwitter } from 'react-icons/ai'

function Profile() {
  return (
    <div className='app_layout'>
      <div className={style.profileContainer}>
        <div className={exploreStyle.header}>
          <div className={`${exploreStyle.headFlex} text-right mb-0`}>
            <Link to="/home">
              <img
                src="./images/arrow.png"
                alt=""
                className={exploreStyle.arrowIcon}
              />
            </Link>
            <div className={`${style.actionBtn} flex items-center`}>
              <BsAt />
              <BsUpload />
              <AiOutlineSetting />
            </div>
          </div>
        </div>
        <div className={style.picSection}>
          <img src="./images/user1.jpg" alt="" className={style.profilePic} />
          <h4>Okhamena Azeez</h4>
          <p>@ken_okha</p>
          <div className={style.follower}>
            <p className="flex items-center">
              <span>0</span>
              <div> followers</div>
            </p>

            <p className="flex items-center">
              <span>51</span>
              <div> following</div>
            </p>
          </div>
          <div className="mt-7">
            <button>Add a bio</button>

            <div className="mb-0  flex items-center">
              <button className="mb-0 flex items-center mr-3">
                <AiOutlineTwitter className="mr-1" />
                <span>Add Twitter</span>
              </button>

              <button className="mb-0 flex items-center">
                <AiOutlineInstagram className="mr-1" />
                <span>Add Instagram</span>
              </button>
            </div>
          </div>

          <div className={style.nominated}>
            <img src="./images/user1.jpg" alt="" />
            <div>
              <p>Joined 31-01-2000</p>
              <p>
                Notinated for <span> Antom Alarcon</span>
              </p>
            </div>
          </div>
        </div>
        <div className={`${style.flex} ml-2`}>
          <p>Member of</p>
          <button className={style.addMemberBtn}>
            <BsPlus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile