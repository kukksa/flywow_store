import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const Class = ({type}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return (       
        <div className="type_of_products">
            <img className="icon" src={type.img} alt="class" />
            <div className="about">
                <h2 className="type">{type.name}</h2>
                <p className="text_description">{type.description}</p>
                <h2 className="price">{type.price} €</h2>
                <ChangeQuantity quantity = {quantity} setQuantity = {setQuantity}/>
                <button onClick={() => {dispatch(addItemToCart({type,quantity}))}} className="btn_store">Добавить в корзину</button>  
            </div>  
        </div>
    )
}

export default Class;