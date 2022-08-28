import React from 'react'
import  data from '../data/Activity.json'
import style from '../styles/activity.module.css'
import SubHeader from '../components/SubHeader'

function Activity() {
  const {Activity} =data
  return (
    <div className='app_layout'>
     <SubHeader 
     pageTitle="ACTIVITY"/>
      <div className="flex flex-col">
        {Activity.map((item) => (
          <div className={`${style.container} flex my-2`}>
            <img src="./images/user1.jpg" alt="" />
            <div>{item.title}</div>
            <div >{item.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activity