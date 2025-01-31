import React from "react";
import "../ComponStore/style1.css"
import { ShopCard } from "../ComponCardsView/ShopCard.jsx";

export function CardsView({items}) {
    const shopCard = items.map((item) => {
        return <ShopCard item={item}/>
    })

return(
    <div className="container container_cards">
      <>{shopCard}</>
    </div>
)
}











