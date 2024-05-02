import React from "react";
import "./Tool.css";

function Tool(props) {
  return (
    <div className="ToolCard w-1/4 my-5 p-3 shadow-2xl transition-transform ease-in duration-300 hover:scale-105 border-2 rounded-xl bg-gray-100">
      <a href={props.link} target="__blank">
        <div id="toolImage">
          <img
            id="photo"
            className="rounded-md p-2"
            src={props.image}
            alt="404 not found"
          />
        </div>
        <div className="text-center font-bold text-3xl p-2" id="toolText">
          {props.title}
        </div>
      </a>
    </div>
  );
}

export default Tool;
