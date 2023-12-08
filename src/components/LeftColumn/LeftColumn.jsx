import React from 'react';
import "./leftColumn.css";
import { useSelector , useDispatch } from 'react-redux';
import { changeClass } from '../../ReduxStore/Slices/leftColumn';
import { useState } from 'react';



const LeftColumn = () => {
  const dispatcher = useDispatch();
  const { leftColumnClass } = useSelector(state => state.leftColll);
  let [status , setStatus] = useState(true);
 
const classChanger = ()=>{
  setStatus(!status)
  dispatcher(changeClass(status))
}
return (
    <div onClick={classChanger}  className={leftColumnClass}>
    </div>
  )
}

export default LeftColumn