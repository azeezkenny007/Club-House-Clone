import React from 'react'
import SwipeableBottomSheet  from 'react-swipeable-bottom-sheet'
import style from '../styles/bottom.module.css'
import StartRoom from './bottom_sheets/StartRoom';
import NewRoom from './bottom_sheets/NewRoom';

function Bottomsheets(props) {
  return (
    <div>
      <SwipeableBottomSheet
        open={props.sheetVisible}
        onChange={() => {
          props.setSheetVisible(!props.sheetVisible);
          props.setItemVisible(true);
        }}
        fullscreen={props.sheetTitle == "room detail" ? true : false}
      >
        <div
          className={style.bContainer}
          style={{
            backgroundColor:
              props.sheetVisible == "profile" ? "transparent" : "",
          }}
        >
          {props.sheetTitle == "new room" ? (
            <NewRoom
            cardDetail={props.cardDetail}
          
           setSheetVisible={(item) => {
              props.setSheetVisible(item)
              props.setItemsVisible(true)
           }} 
         />
          ): props.sheetTitle=="start room" ? (
             <StartRoom
           setSheetCreateRoom={props.setSheetCreateRoom}
           setSheetVisible={(item) => {
              props.setSheetVisible(item)
              props.setItemsVisible(true)
           }}/>) 
            : (
                 ""
           )}
           
        </div>
      </SwipeableBottomSheet>
    </div>
  );
}

export default Bottomsheets