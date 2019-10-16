import React from 'react';
import './AuthorSpan.css';

interface Props {
  children: JSX.Element | string;
}

function AuthorSpan({ children }: Props) {
  return <span className="AuthorSpan">{children}</span>;
}

export default AuthorSpan;
