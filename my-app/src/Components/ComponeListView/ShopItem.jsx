
export const ShopItem = (item) => {
return (
   <div className="card">
       <img src={item.item.img}/>
       <div className="card_title">{item.item.name}</div>
       <div className="card_text">{item.item.color}</div>
       <div className="card_price">{item.item.price}</div>
       <button className="card_btn">Add To Card</button>
   </div>
)
}