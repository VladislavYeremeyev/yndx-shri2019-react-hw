import React from 'react';
import './Header-Menu.css';
import { cn } from '@bem-react/classname';

interface headerMenuProps {
  mix: string[];
  children: JSX.Element;
}

/* TODO: Use BEM React Core */
function HeaderMenu(props: headerMenuProps) {
  return (
    <div
      className={`Header-Menu ${
        props.mix ? cn(props.mix[0])(props.mix[1]) : ''
      }`}
    >
      {props.children}
    </div>
  );
}

export default HeaderMenu;
