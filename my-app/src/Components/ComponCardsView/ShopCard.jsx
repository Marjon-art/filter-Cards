
export const ShopCard = (item) => {
 return (
<div className="container_cards">
    <div className="card">
    <div className="cards_top">
    <div className="cards_title">
        <h1>{item.item.name}</h1>
        <p>{item.item.color}</p>
    <div className="cards_img">
    <img src={item.item.img}/>
    </div>
     </div>
</div>
<div className="cards_bottom">
<div className="cards_prices">
    <div className="cards_price">{item.item.price}</div>
    <button className="cards_btn">Add To Card</button>
</div>
</div>
</div>
    </div>

 )
  
}