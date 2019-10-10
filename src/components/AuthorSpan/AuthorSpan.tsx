import React from "react";
import "./AuthorSpan.css";

interface Props {
	children: JSX.Element;
}

function AuthorSpan({children}: Props) {
  return <span className="AuthorSpan">{children}</span>;
}

export default AuthorSpan;
