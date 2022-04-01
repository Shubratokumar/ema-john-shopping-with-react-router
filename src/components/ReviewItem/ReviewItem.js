import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {handleRemoveProduct, product} = props;
    const {name, img, price, shipping, quantity} = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-details-container">
                <div className="review-item-details">
                    <p title = {name} className="product-name">
                        {name.length > 20 ? name.slice(0,20) + '...' : name}
                    </p>
                    <p>Price : $ <span className='orange-color'>{price}</span></p>
                    <p><small>Shipping : $ {shipping}</small></p>
                    <p><small>Quantity : {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveProduct(product)}>
                        <FontAwesomeIcon icon = {faTrashAlt} className ='delete-icon'></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;