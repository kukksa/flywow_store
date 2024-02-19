import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice, getTotalQuantity } from "../../redux/cartSlice";
import { useState } from "react";
import dataClasses from "../../dataClasses";





const Content = ({setIsOpen}) => {


    const [thanks, setThanks] = useState(false);

    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const totalQuantity = useSelector(getTotalQuantity);

    const otherCategory = cartItems.some((cartItem) => {
        const item = dataClasses.find((dataItem) => dataItem.id === cartItem.typeId);
        return item.category === "ПРОЧЕЕ";
    });
    
    const deliveryCost = otherCategory ? 5 : 0;

    return (
    <div className="modal_content">
            <h2 className="title_cart">Корзина</h2>
            {cartItems.map(cartItem => <CartItem cartItem={cartItem} key={cartItem.id}/>)}        
            <p className="total_price">{totalQuantity} шт. , {totalPrice} €</p>
            <p className="total_price">Доставка: {deliveryCost} €</p>
        <div className="cart_buttons">
            <button className="return" onClick={() => setIsOpen(false)}>Вернуться за покупками</button>
            <button onClick={()=>setThanks(!thanks)} className="checkout">Перейти к оформлению</button>
        <div className={thanks ? "thanks showThanks" : "thanks"}>            
            <p>В будущем тут будет форма для оплаты</p>
            <h5>Благодарим за выбор нашего магазина</h5>
        </div>
        
    </div>
    </div>
    )
}

export default Content;