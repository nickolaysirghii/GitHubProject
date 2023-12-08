import React from 'react';
import "./learnEria.css";
import LeftColumn from '../LeftColumn/LeftColumn';
import RigntColumn from '../RihtColumn/RigntColumn';
import PictureWindow from '../PictureWindow/PictureWindow';

const LearnEria = () => {
  return (
    <div className='learnContainer'>
      <LeftColumn />
      <PictureWindow />
      <RigntColumn />
    </div>
  )
}

export default LearnEria