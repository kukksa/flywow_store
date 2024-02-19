import dataClasses from "../../dataClasses";
import { removeItemFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({cartItem}) => {
    const classes = dataClasses.find(item => item.id === cartItem.typeId);
    const dispatch = useDispatch();


    return(
        <div className="cart_item">
            <div className="item">
                <p className="cart_type">{classes.name}</p>
                <span className="cart_description">{classes.description}</span>
            </div>
            <div className="cart_price_item">
                <p>{cartItem.quantity} х € {classes.price * cartItem.quantity}</p>
                <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
                <img className="cart_icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt=""/> 
                </span>
            </div>

        </div>
    )
}
export default CartItem;