import React from 'react';
import "./rihtColumn.css";
import VideoLessons from './Lessons/Lessons';
import { useSelector , useDispatch } from 'react-redux';
import { useState } from 'react';
import { changeRightClass } from '../../ReduxStore/Slices/rightColumn';
import { startIt  , stopIt , leftIt , pauseIt , rightIt } from '../../ReduxStore/Slices/timeRun';


const RigntColumn = () => {
    const dispatcher = useDispatch();
    const { rightColumnClass } = useSelector(state => state.rihtColll);
    const { goPlay , goStop , goLeft , goPause , goForvard } = useSelector(state => state.BackImage);

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
        <div className='speed'>
          
        </div>
        <div className='controlBord'>
          <div onClick={()=>dispatcher(leftIt())} className={goLeft ? "runBackOn" : "runBack"}></div>
          <div onClick={()=>dispatcher(stopIt())} className={goStop ? "stopOn" : "stop"}></div>
          <div onClick={()=>dispatcher(startIt())} className={goPlay ? "playOn" : "play"}></div>
          <div onClick={()=>dispatcher(pauseIt())} className={goPause ? "pauseOn" : "pause"}></div>
          <div onClick={()=>dispatcher(rightIt())} className={goForvard ? "runForwardOn" : "runForward"}></div>
        </div>
        
        <div onClick={openRight} className='OpenIt'>Open</div>
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