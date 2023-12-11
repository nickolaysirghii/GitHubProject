import React , {useState} from 'react'
import "./lessons.css";
import { useDispatch } from 'react-redux';
import { pickUpLesson } from '../../../ReduxStore/Slices/allTheLesson';
import { timeFromStart , setLimit } from '../../../ReduxStore/Slices/timeRun';

const VideoLessons = ({elem}) => {
  let [ statusClass , setStatusClass ] = useState(false);
  const dispatcher = useDispatch();
  const takeIt = ()=>{
    dispatcher(pickUpLesson(elem.id));
    dispatcher(timeFromStart());
    dispatcher(setLimit(elem.theLimit))
    setStatusClass(!statusClass)
  }
  const pictureStyle = {
    width: "90%",
    height: "90%",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    marginLeft: "2%",
    backgroundColor: "rgb(55, 54, 54)"
  }

  return (
    <div onClick={takeIt}  className={statusClass ? "eachLessonTaken" : "eachLesson"}>
     <div style={pictureStyle}  className={`${elem.word}0`}>{elem.id}</div> 
    </div>
  )
}

export default VideoLessons