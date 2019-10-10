import React from "react";
import "./AuthorSpan.css";

function AuthorSpan(props) {
  return <span className="AuthorSpan">{props.children}</span>;
}

export default AuthorSpan;
