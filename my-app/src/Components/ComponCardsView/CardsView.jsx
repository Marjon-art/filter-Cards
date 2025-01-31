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













/**Следовательно, в компоненте CardView, надо только перебирать 
 * методом мэп полученный массив объектов. Каждую карточку надо формировать в другом компоненте. 
 * Пиши теперь этот компонент - ShopCard, также передавай туда пропсы и там уже формируй карточку 
 * (нужную структуру html) */