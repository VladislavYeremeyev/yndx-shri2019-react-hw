import React from 'react';
import './Icon.css';
import { cn } from '@bem-react/classname';

type iconMods = {
  type: string;
  'space-r'?: string;
};

interface iconProps {
  mod: iconMods;
}

function Icon(props: iconProps) {
  return (
    <div
      className={`${props.mod ? cn('Icon')(props.mod) : cn('Icon')()}`}
    ></div>
  );
}

export default Icon;
