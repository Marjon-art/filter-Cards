import React from "react";
import "../ComponeListView/style2.css";
import {ShopItem } from "../ComponeListView/ShopItem.jsx";

export function ListView({items}) {
const shopItem = items.map((item) => {
    return <ShopItem item={item}/>
})
return (
    <div className="cards">
        <>{shopItem}</>
    </div>
      
  
)
}