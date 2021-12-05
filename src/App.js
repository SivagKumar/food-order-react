import React, {useState} from "react";
import Header from './components/Layout/Header'
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

/*when we have multiple routes we need to import the route location lazily
const newRoute = React.lazy(()=> import(''))
import suspense component provided by react and wrap the code where we use the routes components are called
with fallback value (like loading spinner)*/

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);
    const showCartHandler = () =>{
        setCartIsShown(true);
    }
    const hideCartHandler = () =>{
        setCartIsShown(false);
    }
    return (
        <CartProvider >
            {cartIsShown && <Cart onClose={hideCartHandler}/>}
            {/*donot execute the function just point to the function*/}
            <Header onShowCart={showCartHandler}/>
            <main>
                <Meals/>
            </main>
        </CartProvider>
    );
}

export default App;
