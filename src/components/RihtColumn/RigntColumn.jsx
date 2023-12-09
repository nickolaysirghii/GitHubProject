import React from 'react';
import "./rihtColumn.css";
import VideoLessons from './Lessons/Lessons';
import { useSelector , useDispatch } from 'react-redux';
import { useState } from 'react';
import { changeRightClass } from '../../ReduxStore/Slices/rightColumn';
import { startIt  , stopIt , leftIt , pauseIt , rightIt , setSpeed , 
setStraight } from '../../ReduxStore/Slices/timeRun';


const RigntColumn = () => {
    const dispatcher = useDispatch();
    const { rightColumnClass } = useSelector(state => state.rihtColll);
    const {tangled , straight , goPlay , goStop , goLeft , goPause , goForvard ,
    spead1 , spead2 , spead3 , spead4 , spead5 } = useSelector(state => state.BackImage);
    

    const { Lessons , chosenLesson } = useSelector(state => state.allOfTheLessons)
    let [status , setStatus] = useState(true);
    const openRight = ()=>{
        setStatus(!status)
        dispatcher(changeRightClass(status))
    }
   
  return (
    <div  className={rightColumnClass}>
      <div className='seengArea'>
        <div className='ChosenLesson'>{chosenLesson.title}</div>
        <div className='straightOr'>
          <div onClick={()=>dispatcher(setStraight())} className={straight ? "stryghtOn" : "stryght" }></div>
          <div onClick={()=>dispatcher(setStraight())} className={tangled ? "notStryghtOn" : "notStryght"}></div>
        </div>


        <div  className='speed'>
          <div onClick={()=>dispatcher(setSpeed(250))} className={spead1 ? "speedButtonOn" : "speedButton"}>0.5s</div>
          <div onClick={()=>dispatcher(setSpeed(500))} className={spead2 ? "speedButtonOn" : "speedButton"}>1s</div>
          <div onClick={()=>dispatcher(setSpeed(750))} className={spead3 ? "speedButtonOn" : "speedButton"}>1.5s</div>
          <div onClick={()=>dispatcher(setSpeed(1000))} className={spead4 ? "speedButtonOn" : "speedButton"}>2s</div>
          <div onClick={()=>dispatcher(setSpeed(1250))} className={spead5 ? "speedButtonOn" : "speedButton"}>2.5s</div>
          
        </div>
        <div className='controlBord'>
          <div onClick={()=>dispatcher(leftIt())} className={goLeft ? "runBackOn" : "runBack"}></div>
          <div onClick={()=>dispatcher(stopIt())} className={goStop ? "stopOn" : "stop"}></div>
          <div onClick={()=>dispatcher(startIt())} className={goPlay ? "playOn" : "play"}></div>
          <div onClick={()=>dispatcher(pauseIt())} className={goPause ? "pauseOn" : "pause"}></div>
          <div onClick={()=>dispatcher(rightIt())} className={goForvard ? "runForwardOn" : "runForward"}></div>
        </div>
        
        <div onClick={openRight} className='OpenIt'>{status ? "open" : "close"}</div>
      </div>
      <div className='hiddenArea'>
      {
        Lessons.map((elem , idx) => {
          return <VideoLessons key={idx} elem = {elem} />
        })
      }
      </div>

    </div>
  )
}

export default RigntColumn