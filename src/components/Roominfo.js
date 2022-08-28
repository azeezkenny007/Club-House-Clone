import React from 'react'
import data from '../data/roomCard.json'
import style from '../styles/roomcard.module.css'
import {BsChatDots ,BsChatDotsFill, BsFillPersonFill, } from 'react-icons/bs'

function Roominfo() {
  return (
    <div className="">
      {data &&
        data.map((item) => (
          <div className="">
            <div>
              <div className={style.roomContainer}>
                <h6>{item.title}</h6>
                <h2>{item.sub_title}</h2>
                <div className={style.roomMembers}>
                  <div className='flex'>
                    <img src="./images/user1.jpg" alt="" />
                    <img src="./images/user2.jpg" alt="" />
                  </div>
                  <div>
                    {item.members.map((person) => (
                      <p className='flex items-center '>
                        {person.first_name} {person.last_name} <BsChatDots className='ml-1' />
                      </p>
                    ))}
                    <p className="flex items-center">
                      <span className="mr-2"></span>
                      1.8 <BsFillPersonFill />
                      <span className='mx-2'></span>{""}
                      <span className='mr-2'>5</span> <BsChatDotsFill/>

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Roominfo