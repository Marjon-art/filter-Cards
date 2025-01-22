import React from "react";
import "../ComponStore/style1.css"

export function CardsView({items}) {
    const shopCard = items.map((item) => {
        return <img src={item.img}/>
    })
return(
    <div className="cards">
        <>{shopCard}</>
    </div>
)
}