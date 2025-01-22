import React from "react";

export function CardsView({items}) {
    const shopCard = items.map((item) => {
        console.log(shopCard);
        return <img src={item.img}/>
    })
return(
    <div className="cards">
        <>{shopCard}</>
    </div>
)
}