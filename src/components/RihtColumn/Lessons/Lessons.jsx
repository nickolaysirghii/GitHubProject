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

  return (
    <div onClick={takeIt} className={statusClass ? "eachLessonTaken" : "eachLesson"}>{elem.title}</div>
  )
}

export default VideoLessons