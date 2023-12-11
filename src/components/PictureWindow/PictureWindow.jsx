import React , { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { timeGoFirst } from '../../ReduxStore/Slices/timeRun';
import "../dataBase/firstFolder/oneFolder.css";
import "../dataBase/sedondFolder/twoFolder.css";
import "../dataBase/thirdFolder/threeFoder.css";



const PictureWindow = () => {
   const dispatcher = useDispatch();
  const { thePath , firstNumb , goPlay , limit , speed} = useSelector(state=>state.BackImage);
  const { chosenLesson } = useSelector(state => state.allOfTheLessons);
 
  function logNumbersWithDelay(numbers) {
    let index = 0;
    function logNumber() {
      if (index < numbers.length && goPlay && index < limit) {
        dispatcher(timeGoFirst(numbers[index]))
        index++;
        setTimeout(logNumber, speed);
      }
    }
   logNumber();
  }
 useEffect(()=>logNumbersWithDelay(thePath), [goPlay])

    const pictureStyle = {
      width: "85%",
      height: "100%",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      marginLeft: "2%",
      backgroundColor: "rgb(55, 54, 54)"
    }
  return (
    <div style={pictureStyle} className={`${chosenLesson.word}${firstNumb}`} >
       
    </div>
  )
}

export default PictureWindow