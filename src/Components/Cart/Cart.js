
import { useState } from "react";
import Modal from './Modal';
import Content from './Content';
import { useSelector } from "react-redux";
import { getTotalPrice} from "../../redux/cartSlice";
import basket from '../../assets/icons8-basket-96.png'

const Cart = () => {
    const [isOpen, setIsOpen] = useState(false);
    const totalPrice = useSelector(getTotalPrice);
    
    return (
    <div className="cart">
        <span className="icon_basket" onClick={() => setIsOpen(true)}><img className="basket" src={basket} alt="" width='60px' /></span>       
        <span className="basket_price">{totalPrice} €</span>
        {isOpen && 
            <Modal setIsOpen={setIsOpen}>
            <Content setIsOpen={setIsOpen}/>
            </Modal>
        }  
    </div>
    )
}

export default Cart;