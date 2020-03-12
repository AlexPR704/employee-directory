import React from "react";
import "./style.css";

function header(props) {
  return <h1 className="header">{props.children}</h1>;
}

export default header;