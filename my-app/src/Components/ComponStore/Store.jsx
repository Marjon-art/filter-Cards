import React from "react";
import { products } from "../../data.js";
import { IconSwitch } from "../ComponIconSwitch/IconSwitch.jsx";
import { CardsView } from "../ComponCardsView/CardsView.jsx";
import { ListView } from "../ComponeListView/ListView.jsx";


export const Store = () => {
 const [isIcon, setIsIcon] = React.useState("view_list");


return (
<div className ="cards">
      <IconSwitch icon={isIcon} onSwitch={(icon) => setIsIcon(icon)}/>
        { isIcon === "view_list" ? <ListView items={products}/> : <CardsView items={products}/>}
</div>

)
}
// Теперь надо подправить условный рендеринг, в соответствии с условиями задания - 
// Компоненту CardsView от Store мы передаём свойство cards — массив с данными, 
// каждый элемент из которого затем уже отображается с помощью карточки товара ShopCard.
// удали строки строки 16-17

// да, вызов так и делается. Теперь надо исправить в сторе onSwitch={() => setIsIcon(isIcon)}, т.к. 
// теперь сюда принимаешь имя нажатой кнопки
//имя иконки нам приходит в пропсах - это icon, его и используй в выражении 
// сравнения с именем иконки (приведённой в задании).
// Вызывать нам надо переданную ф-ию - onSwitch, 
// и передавать в неё новое/другое имя кнопки (т.е. переключаем одну на другую). 
// Ты же сейчас написала вызов компонента, а этим текущий компонент заниматься не должен

// Иконка разметки, которая указывает на переключение между типами расположения товаров, 
// реализована в компоненте без состояния IconSwitch, которому от Store мы передаём два свойства:
// Вот в задаче есть пример: onSwitch={() => console.log("change state here")} - это тоже слушатель, 
// при его срабатывание отработает стрелочная ф-ия, в консоль выведется переданная фраза.
// Наша ситуация похожа, т.е. в onClick нам тоже надо что-то делать при срабатывании слушателя клика. 
// зачем Тебе отдельная константа с ф-ие, она же не будет выполняться, пока её не вызовешь. 
// Подправляем предоставленный пример: onClick={() => здесь что-то делаем, т.е. проверку. 
// имя иконки нам приходит в пропсах - это icon, его и используй в выражении 
// сравнения с именем иконки (приведённой в задании).







//в этом слушателе проверка с вызовом переданной onSwitch, которая принимает аргумент - новое/другое имя иконки
// в этом слушателе нужна проверка на текущее имя иконки. 
// В зависимости от её имени будем менять имя на другое (как в задаче написаны и у этих иконок).
//  Т.к. в сторе у нас есть слушатель onSwitch со стрелочной ф-ей (которая меняет состояние иконки), 
//  то её и вызываем в этой проверке, с передачей ей нужного имени иконки 

