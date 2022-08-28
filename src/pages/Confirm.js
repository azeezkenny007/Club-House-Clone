import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

function Confirm() {
  return (
    <div className='plan_layout'>
      <div className="h-screen flex items-center justify-center bg-orange-50 relative ">
        <Link to="get_username" className="absolute top-3 left-3 ">
          <img src="./images/arrow.png" alt="" className="w-5" />
        </Link>
        <div className="text-center ">
          <h1
            style={{ width: "100%", maxWidth: "200px" }}
            className="mb-2 font-best text-2xl"
          >
            Enter the code we just sent you!!!!
          </h1>
          <input
            type="text"
            name=""
            id=""
            className="w-full mb-2"
            style={{
              border: "none",
              textAlign: "center",
              outline: "none",
              borderRadius: "2px",
            }}
          />
          <p className="text-base">
            Didn't receive it <span>tap to resend</span>{" "}
          </p>
          <div className="flex items-center justify-center mt-2">
            <Link
              to="/allow_notification"
              className="text-white flex items-center bg-sky-500 hover:bg-sky-700 rounded-full p-2 px-6 justify-center mb-3 w-2/4 "
            >
              <div className="text-base mr-2 hover:text-white">Next</div>
              <img
                src="./images/dright.svg"
                alt=""
                className="w-4 text-white"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirm