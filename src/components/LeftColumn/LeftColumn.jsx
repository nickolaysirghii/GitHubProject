import React from 'react';
import "./leftColumn.css";
import { useSelector , useDispatch } from 'react-redux';
import { changeClass } from '../../ReduxStore/Slices/leftColumn';
import { useState } from 'react';




const LeftColumn = () => {
  const dispatcher = useDispatch();
  const { leftColumnClass } = useSelector(state => state.leftColll);
  let [status , setStatus] = useState(true);
  let StorageArray = JSON.parse(localStorage.getItem("PickOnArray"));
  const abba = StorageArray;
  const { chosenLesson } = useSelector(state => state.allOfTheLessons);
  const { firstNumb } = useSelector(state => state.BackImage);
 const classChanger = ()=>{
  setStatus(!status)
  dispatcher(changeClass(status))
}
const submitForm = (e)=>{
  e.preventDefault();
  const { id , title , word , limit , delete4 } = e.target;
  const TheId = +id.value;
  const objar = {
    id: id.value === "" ? abba.length+1 : TheId,
    title: title.value,
    word: word.value,
    limit: limit.value,
  }
if(delete4.value === "delete"){
  StorageArray =  StorageArray.filter((elem) => elem.id !== TheId)
}else{

  if(id.value !== ""){
    StorageArray.forEach((elem) => {
      if(TheId === elem.id){
        elem.title = title.value === "" ? elem.title : title.value;
        elem.word = word.value === "" ? elem.word : word.value;
        elem.limit = limit.value === "" ? elem.limit : limit.value;

      }
    });

  }else{
    StorageArray.push(objar)
  }
}
localStorage.setItem("PickOnArray",JSON.stringify(StorageArray));
  e.target.reset()
}
const loading = (firstNumb / chosenLesson.limit) * 100
return (
    <div className={leftColumnClass}>
      <div onClick={classChanger} className='progress'>
        <div className='progressColor' style={{height: `${loading}%`}}></div>
      </div>
      <div className='Inputsss'>
        <form onSubmit={submitForm}>
          <input type='text' placeholder='Id' name='id' />
          <input type='text' placeholder='title' name='title' />
          <input type='text' placeholder='classWord' name='word' />
          <input type='text' placeholder='Limit' name='limit' />
          <input type='text' placeholder='delete4' name='delete4' />
          
          <button>Hit</button>
          
          
        </form>
      </div>
    </div>
  )
}

export default LeftColumn