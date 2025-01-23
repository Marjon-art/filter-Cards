
export const ShopCard = (item) => {
 return (
    <div className="cards">
    <div className="container_cards">
    <div className="card">
    <div classNam="cards_top">
    <div className="cards_title">
        <h1>{item.item.name}</h1>
        <p>{item.item.color}</p>
    <div className="cards_img">
    <img src={"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"}/>
    </div>

    </div>

</div>
</div>
</div>
    </div>
 )
  
}