import React from 'react';
import "./rihtColumn.css";
import VideoLessons from './Lessons/Lessons';
import { useSelector , useDispatch } from 'react-redux';
import { useState } from 'react';
import { sortLessons } from '../../ReduxStore/Slices/allTheLesson';
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
    const pictureStyle = {
      width: "90%",
      height: "180px",
      marginTop: "30px",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      marginLeft: "2%",
      backgroundColor: "rgb(55, 54, 54)"
    }
   
  return (
    <div  className={rightColumnClass}>
      <div className='seengArea'>
        <div style={pictureStyle} className={`${chosenLesson.word}0`}></div>
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
        <div className='selectBy'>
          <div onClick={()=>dispatcher(sortLessons("firstNew"))}>firstNew</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
        </div>
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