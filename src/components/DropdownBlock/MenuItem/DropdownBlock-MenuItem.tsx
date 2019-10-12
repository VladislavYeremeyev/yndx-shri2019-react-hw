import React from 'react';
import './DropdownBlock-MenuItem.css';
import './_current/DropdownBlock-MenuItem_current.css';
import { cn } from '@bem-react/classname';

type dropdownBlockMenuItemMods = {
  current: boolean;
};

interface dropdownBlockMenuItemProps {
  children: JSX.Element | JSX.Element[] | string;
  onClick: React.MouseEventHandler<HTMLLIElement>;
  mod?: dropdownBlockMenuItemMods;
}

function DropdownBlockMenuItem(props: dropdownBlockMenuItemProps) {
  return (
    <li
      onClick={props.onClick}
      className={`${
        props.mod
          ? cn('DropdownBlock-MenuItem')(props.mod)
          : cn('DropdownBlock-MenuItem')()
      }`}
    >
      {props.children}
    </li>
  );
}

export default DropdownBlockMenuItem;
