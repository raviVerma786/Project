import React from "react";
import ToolsApi from "./ToolsApi";
import Tool from "./Tool";
import "./Tool.css";

function Tools() {
  return (
    <div className="pt-7 bg-gray-300">
    
    <h1 id="Tools" className='text-orange-600 font-bold text-4xl text-center'>
        Avinya Tools
      </h1>
    <div className="projectTools flex gap-4 flex-wrap items-center justify-around p-5">
       
      {ToolsApi.map((obj) => {
        return (
          <Tool
            key={obj.key}
            link={obj.link}
            image={obj.image}
            title={obj.title}
          />
        );
      })}
    </div>
    </div>
  );
}

export default Tools;
