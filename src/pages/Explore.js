import React from 'react'
import style from '../styles/explore.module.css'
import {DownOutlined , FireOutlined} from '@ant-design/icons'
import data from '../data/Explore.json'
import {Input} from 'antd'
import SubHeader from '../components/SubHeader'

function Explore() {
 const {people, conversations} =data
  return (
    <div className='app_layout'>
      <div className={style.exploreContainer}>
        <div className={style.Header}>
          <SubHeader pageTitle="EXPLORE" />
          <div className="flex items-center ">
            <img src="images/nsearch.svg" width="15px" />
            <Input
              style={{
                backgroundColor: "#f4f4f4",
                borderRadius: "0.8em",
                padding: "0.3em 1em",
                border: "none",
                boxShadow: "none",
              }}
              size="large"
              placeholder="Find People And Clubs"
            ></Input>
          </div>
        </div>
        <h6>PEOPLE TO FOLLOW</h6>
        <div className={style.peopleContainer}>
          {people.map((item) => (
            <div>
              <div className="flex items-center ">
                <img src="./images/user1.jpg" alt="" />
                <div className="ml-5">
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
              <button>Follow</button>
            </div>
          ))}
          <button className={style.showMore}>
            Show More People <DownOutlined />
          </button>
        </div>
        <h6>FIND CONVERSATIONS ABOUT...</h6>
        <div className="mx-0 grid grid-cols-2 container">
          {conversations.map((item) => (
            <div className="px-2   mb-3">
              <div className={style.conversationCard}>
                <div className="flex items-center">
                  <h6>
                    <FireOutlined className="mb-1" />
                  </h6>
                  <div className="flex mt-1">{item.title}</div>
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Explore