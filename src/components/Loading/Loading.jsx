import React from "react";
import "./Loading.scss";
import { CgLoadbarDoc } from "react-icons/cg";
const Loading = ()=> {
    return (
      <div className="loading">
        <div className="spinner"></div>
        {/* You can add text like "Loading..." here if you want */}
      </div>
    );
  }
export default Loading;  