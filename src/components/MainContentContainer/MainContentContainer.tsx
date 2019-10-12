import React from 'react';
import { cn } from '@bem-react/classname';
import './MainContentContainer.css';
import { mixType } from './../../helper/helper';

interface mainContentContainerProps {
  mix: mixType;
  children: JSX.Element | JSX.Element[];
}

function MainContentContainer(props: mainContentContainerProps) {
  return (
    <div
      className={`MainContentContainer ${
        props.mix ? cn(props.mix[0])(props.mix[1]) : ''
      }`}
    >
      {props.children}
    </div>
  );
}

export default MainContentContainer;
