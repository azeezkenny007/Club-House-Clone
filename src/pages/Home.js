import React, {useState} from 'react'
import DailyInfo from '../components/DailyInfo'
import Header from '../components/Header'
import style from '../styles/home.module.css'
import Roominfo from '../components/Roominfo'
import RubberBand from "react-reveal/RubberBand";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Zoom";
import {AiOutlinePlus} from 'react-icons/ai'
import {BsGrid3X3, BsGrid3X3Gap} from 'react-icons/bs'
import data from '../data/roomCard.json'
import Bottomsheets from '../components/Bottomsheets'
import newRoomData from '../data/newRoom.json'

function Home() {
  const [itemsVisible ,setItemsVisible] =useState(true)
  const [sheetVisible,setSheetVisible]=useState(false)
  const [sheetCreateRoom, setSheetCreateRoom] = useState(false);
  const [loaderVisibility, setLoaderVisibility] = useState(false);
  const [cardId ,setCardId]= useState(1)
  return (
    <div className='app_layout'>
      {loaderVisibility ? (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            bottom: "0",
            right: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="./images/load.gif" alt=""  className='mb-40'/>
        </div>
      ) : (
        ""
      )}
      <Header className="relative" />
      <div className={style.container}>
        <DailyInfo />
        <Roominfo />
      </div>
      <div className={style.actionbtn}>
      
        <button
          className=" mr-2 flex items-center p-1 "
          onClick={() => {
            setSheetVisible(true);
          }}
        >
          <AiOutlinePlus className="" />
          <div> Start A Room</div>
        </button>
        <button>
          <BsGrid3X3Gap />
        </button>
      </div>
      <Bottomsheets
        sheetTitle="start room"
        setSheetVisible={(item) => setSheetVisible(item)}
        sheetVisible={sheetVisible}
        cardDetail={data.find((item) => item.id == cardId)}
        setItemsVisible={(item) => setItemsVisible(item)}
        setSheetCreateRoom={(item) => {
          setLoaderVisibility(true);
          setTimeout(() => {
            setSheetCreateRoom(item);
            setLoaderVisibility(false);
          }, 1000);
        }}
      />
      <Bottomsheets
        sheetTitle="new room"
        setSheetVisible={(item)=> setSheetCreateRoom(item)}
        sheetVisible={sheetCreateRoom}
        cardDetail={newRoomData}
        setItemsVisible={(item)=>setItemsVisible(item)}
      />
    </div>
  );
}

export default Home