import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { timeGoFirst , timeGoSecond  } from '../../ReduxStore/Slices/timeRun';
import "../dataBase/firstFolder/oneFolder.css";
import "../dataBase/sedondFolder/twoFolder.css";
import "../dataBase/thirdFolder/threeFoder.css";



const PictureWindow = () => {
   const dispatcher = useDispatch();
  const { firstNumb , secondNumb , goPlay , limit} = useSelector(state=>state.BackImage);
  const { chosenLesson } = useSelector(state => state.allOfTheLessons);
   
  if(goPlay){
    if(firstNumb === secondNumb){
      setTimeout(() => {
      dispatcher(timeGoFirst())
      },1500);
    }else{
      if(secondNumb !== limit){
        setTimeout(() => {
          dispatcher(timeGoSecond())
          },1500);
       }
      }
  }

    const pictureStyle = {
      width: "85%",
      height: "100%",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      marginLeft: "2%",
      backgroundColor: "rgb(55, 54, 54)"
    }
    //numbOne1 numbTwo1 numbThree1
  return (
    <div style={pictureStyle} className={`${chosenLesson.idName}${firstNumb}`} >
       
    </div>
  )
}

export default PictureWindow