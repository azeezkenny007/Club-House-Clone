import React, {useState} from 'react'
import style from '../../styles/roomDetail.module.css'
import {AiOutlineFile,AiOutlinePlus } from 'react-icons/ai'
import {BsMicMuteFill,BsMicFill} from 'react-icons/bs'


function NewRoom(props) {
 const [micMuteVisible ,setMicMuteVisible] =useState(false)
 const [itemvisible,setItemVisible] =useState(true)
 const card = props.cardDetail
  return (
    <div >
       <div className={style.rContainer}>
             <div className={style.head}>
                  <div className='flex items-center justify-center'>
                   <a href="#" onClick={()=>{props.setSheetVisible(false)}} >
                        <img src="./images/arrow.png" alt=""  className={style.arrowIcon} />
                   </a>
                    <span>Hallway</span>
                  </div>
                   
                  
                  <div className='flex justify-center items-center'>
                      <AiOutlineFile/>
                      <img src="./images/user1.jpg" alt=""  className={style.profile_pic}/>
                  </div>
             </div>
             <div className={style.roomDetailCard}>
                   <div className='flex items-center justify-between flex-wrap'
                   style={{padding:"1em 0.5em"}}>
                      {card.members.map((item)=>(
                            <div className={style.members}>
                                         {micMuteVisible ? (
                                 <div className={style.audioIcon} style={{marginTop:"1 em"}}>
                                       <BsMicMuteFill />
                                 </div>
                                         ) : ("")}

                                <img src="./images/user1.jpg" alt="" />
                                         <p className='flex items-center justify-start'>
                                            <span className='mr-1 mt-1'>*</span>
                                            {item.first_name}
                                         </p>
                                         
                                 </div>
                           
                      ))}
                     
                   </div>
             </div>
             <div className={style.footer}>
                <button onClick={()=>{
                   props.setSheetVisible(false)
                }}>
                  <img src="./images/hand-peace.png" alt="" className='w-10' />
                  Leave Quietly
                </button>
                <div>
                           <button>
                              <AiOutlinePlus/>
                           </button>
                               <button>
                                <img src="./images/stop.png" alt="" className='w-10'/>
                               </button>
                           <button onClick={()=>{
                               setMicMuteVisible(!micMuteVisible)
                           }}>
                                  {micMuteVisible ? <BsMicMuteFill/> : <BsMicFill/>}
                           </button>
                </div>
             </div>
       </div>
         
     </div>
  )
}

export default NewRoom