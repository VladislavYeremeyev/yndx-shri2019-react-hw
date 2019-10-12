import React from 'react';
import './Layout.css';
import { cn } from '@bem-react/classname';
import { mixType } from './../../helper/helper';

interface layoutProps {
  mix: mixType;
  children: JSX.Element | JSX.Element[];
}

/* TODO: Use BEM React Core */
function Layout(props: layoutProps) {
  return (
    <div
      className={`Layout ${props.mix ? cn(props.mix[0])(props.mix[1]) : ''}`}
    >
      {props.children}
    </div>
  );
}

export default Layout;
