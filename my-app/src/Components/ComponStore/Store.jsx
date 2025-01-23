import React from "react";
import { products } from "../../data.js";
import { IconSwitch } from "../ComponIconSwitch/IconSwitch.jsx";
import { CardsView } from "../ComponCardsView/CardsView.jsx";
import { ListView } from "../ComponeListView/ListView.jsx";


export const Store = () => {
const [isIcon, setIsIcon] = React.useState("view_list");

  

return (
    <div className ="cards">
    < IconSwitch icon={isIcon} onSwitch={() => setIsIcon(isIcon)}/>  
    { isIcon === "view_list" ? <ListView/> : <CardsView/> }
    < CardsView items = {products}/>
    </div>
)
}
