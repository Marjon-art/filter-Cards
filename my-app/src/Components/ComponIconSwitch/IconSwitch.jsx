import React from "react";


export function IconSwitch({icon, onSwitch}) {
   return (
   <div className="material-icons" onClick={() => icon === "view_list" ? onSwitch(icon) : ""}>{icon}</div>
)
}


















