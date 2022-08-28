import React, { useState } from 'react'
import {Link } from 'react-router-dom'
import {usState} from 'react'
import PhoneInput from 'react-phone-number-input'
import '../App.css'

function Phoneconfirmation() {
   const [value,setValue]=useState()
  return (
    <div className="plan_layout">
      <div className="py-12 px-7 flex flex-col items-center justify-center h-screen bg-orange-50 relative">
        <Link to="get_username" className="absolute top-3 left-3 ">
          <img src="./images/arrow.png" alt="" className="w-5" />
        </Link>

        <h1 className="text-2xl font-medium  ">Enter your phone</h1>

        <PhoneInput
          international
          defaultCountry="US"
          value={value}
          onChange={setValue}
        />

        <p className="p-3 text-sm max-w-xs text-center">
          By entering your number you're agreeing to our {}
          <span className="font-medium">
            Terms of service and privacy policy
          </span>
          .Thanks!
        </p>

        <Link
          to="/confirm"
          className="text-white flex items-center bg-sky-500 rounded-full p-2 px-6 justify-around mb-3 "
        >
          <div className="text-base mr-2">Next</div>
          <img src="./images/dright.svg" alt="" className="w-4 text-white" />
        </Link>
      </div>
    </div>
  );
}

export default Phoneconfirmation