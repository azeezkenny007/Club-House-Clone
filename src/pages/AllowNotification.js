import React from 'react'
import style from '../styles/Website.module.css'
import {Link} from 'react-router-dom'

function AllowNotification() {
  return (
    <div className='plan_layout'>
      <div className="flex justify-center items-center h-screen bg-orange-50  ">
        <div className="text-center max-w-xs ">
          <h1 className="font-best mb-3">Last important step</h1>
          <h1 className="   mb-3 flex  ">
            allow notification to know when people are talking
          </h1>
          <div className={style.notification}>
            <div className="p-3 ">
              <h3 className="capitalize">
                "Clubhouse" would like to send you notifications
              </h3>
              <p className="text-xs">
                Notifications may include sound, alert and icon badges
              </p>
            </div>
            <div className={style.actionBtn}>
              <Link
                to="/home "
                className="text-sky-700 hover:text-sky-600 font-semibold f"
              >
                Don't allow
              </Link>
              <Link
                to="/home "
                className="text-sky-700 hover:text-sky-600 font-semibold f"
              >
                Allow
              </Link>
              <img src="./images/hand.png" alt="" className={style.hand_icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllowNotification