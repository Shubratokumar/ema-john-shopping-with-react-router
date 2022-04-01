import React from 'react';
import './Orders.css';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import useProducts from './../../hooks/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct = (product) =>{
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }
    return (
        <div>
            <div className="shop-container">
                <div className="review-items-container">
                    {
                        cart.map(product => <ReviewItem product = {product} 
                        key = {product.id}
                        handleRemoveProduct = {handleRemoveProduct}
                        ></ReviewItem>)
                    }
                    
                </div>
                <div className="cart-container">
                    <Cart cart = {cart}>
                        <Link to ='/inventory'>
                            <button>Proceed Checkout</button>
                        </Link>
                        <br />
                        <br />
                        <Link to ='/shop'>
                            <button>Shop Again</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;