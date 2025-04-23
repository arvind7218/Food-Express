import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { food_list, cartItems, removeFromCart, getTotalAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();

  // Debug print to check URL and food list image paths
  console.log("Backend URL:", url);
  console.log("Food List:", food_list);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          const itemCount = cartItems[item._id];
          if (itemCount > 0) {
            // Construct image URL
            const imageUrl = item.image.startsWith('http')
              ? item.image
              : `${url}/images/${item.image}`;

            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={imageUrl} alt={item.name} onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/fallback.jpg'; // fallback if image fails
                  }} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{itemCount}</p>
                  <p>${item.price * itemCount}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">X</p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalAmount() === 0 ? 0 : getTotalAmount() + 2}</b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>Proceed to Checkout</button>
        </div>

        <div className="cart-promocode">
          <div>
            <p>If you have a promocode, enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Promocode" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
