import React from 'react'
import data from '../data/DailyCard.json'
import style from '../styles/daily.module.css'

function DailyInfo() {
 console.log(data[0].title)
  return (
    <div className={style.Daily}>
    {data && data.map((item =>  (
       <div>
         <span>{item.time}</span>
         <div>
             <span>{item.title}</span>
             <p>{item.description}</p>
         </div>
       </div>
    
    )))}
    </div>
  );
}

export default DailyInfo