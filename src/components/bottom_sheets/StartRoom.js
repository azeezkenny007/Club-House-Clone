import React, {useState} from 'react'
import style from '../../styles/bottom.module.css'
import {FcGlobe} from 'react-icons/fc'

function StartRoom(props) {
 const [room ,setRoom] = useState()
  return (
    <div>
        <div className={style.switch_line}></div>
        <div className='text-right'>
           <button className={style.addTopicBtn}> 
                 + add a topic
           </button>
        </div>
        <div className={style.selectRoom}>
           <button onClick={()=> setRoom("open")} className={room=="open" ? style.active : "" }>
             <div className='flex flex-col items-center'>
                <FcGlobe/>
                <div>Open</div>
               </div>
           </button>

           <button onClick={()=> setRoom("social")} className={room == "social" ? style.active : ""}>
               <div className='flex flex-col items-center'>
                <FcGlobe/>
                <div> Social</div>
               </div>
               
              
           </button>

            <button onClick={()=> setRoom("closed")} className={room == "closed" ? style.active : ""}>
              <div className='flex flex-col items-center'>
                <FcGlobe/>
                <div> Closed</div>
               </div>
           </button>
             </div>
           <p>Start a room 
                <span>{room =="closed" ? " for people i choose " : 
                        room =="social" ? " for people i follow" :
                        " open to everyone"}</span>
           </p>
           <div className='text-center'>
                 <button className={style.letgoBtn} onClick={()=>{
                    props.setSheetCreateRoom(true)
                    props.setSheetVisible(true)
                 }}>
                  🚗 let's go
                  
                 </button>
         
        </div>
    </div>
  )
}

export default StartRoom