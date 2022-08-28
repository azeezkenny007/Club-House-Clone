import React from 'react'
import data from '../data/Upcoming.json'
import style from '../styles/upcoming.module.css'

function Upcoming() {
 const {Upcoming}=data
  return (
    <div className='app_layout'>
      <div className={style.upcomingContainer}>
        <div className="flex flex-col m-3">
          {Upcoming.map((item) => (
            <div className="flex flex-col mb-5">
              <div
                className={`${style.timeSection} flex items-center justify-between`}
              >
                <div>{item.time}</div>
                <img src="./images/notify.svg" alt="" />
              </div>
              <div>{item.title}</div>
              <div className={style.profilePic}>
                <img src="./images/user1.jpg" alt="" />
                <img src="./images/user2.jpg" alt="" />
                <img src="./images/user1.jpg" alt="" />
                <img src="./images/user2.jpg" alt="" />
              </div>
              <div className={style.name}>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Upcoming