import React from 'react'
import styles from '../styles/Website.module.css'
import {Link } from 'react-router-dom'

function Website() {
  return (
    <div className='plan_layout'>
      <div className="py-12 px-6 flex flex-col h-screen justify-between items-start bg-orange-50">
        <h1 className="text-3xl font-medium font-serif mb-3 ">welcome!</h1>
        <div className=" h-64 overflow-auto">
          <p className="mb-8 font-normal text-base">
            We are working to get clubhouse ready for everyone while we wrap up
            finishing touches, we're are adding people gradually makig sure
            nothing breaks
          </p>

          <p className="mb-8 font-normal text-base">
            Anyone can join and invite from an existing user or reserve your
            username and we will text you if you have a friend on the app who
            can let you in . we are so grateful you are here and can't wait to
            have you join
          </p>

          <p className="mb-8">Paul,Rohan & the Clubhouse team</p>
        </div>
        <div className="flex self-center flex-col items-center justify-center">
          <Link
            to="/invite"
            className="text-white font-semibold flex items-center mb-4 rounded-3xl bg-sky-700 p-3"
          >
            {/* <img src="" alt="" /> */}
            Get your username {}
          </Link>
          <Link
            to="/get_username"
            className="text-sky-800 font-normal flex items-center text-sm "
          >
            Have a invite text sign? in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Website