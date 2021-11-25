import  cartIcon from '../Cart/cartIcon';
import classes from './HeaderCartButton.module.css';
import CartIcon from "../Cart/cartIcon";
import {useContext} from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = props =>{
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) =>{
        /*amount item shows the no of item per item type*/
        return curNumber+item.amount;
    }, 0);

    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
};

export default HeaderCartButton;