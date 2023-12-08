import React from "react";
import Navbar from "./Navbar";
import formatCurrency from "../util.js";
import { useSelector, useDispatch } from "react-redux";


export default function Cart() {

  const cart = useSelector((store)=> store);
  console.log(cart)
  const dispatch = useDispatch();

  const addition = (acc, currentvalue)=> {
    return acc + currentvalue.price * currentvalue.quantity
  }

  const total = cart.reduce(addition, 0);

  return (
    <>
      <Navbar />
      <div className="cart">
        {cart.map((item) => {
          // item.quantity = 1;
          console.log(item)
          return (
            <div className="cart-item" key={item.id}>
              <img src={item.image} />
              <div className="cart-item-text">
                <div className="cart-item-info">
                  <h4>{item.title}</h4>
                  <h5>قیمت:   {formatCurrency(item.price)}</h5>
                  <h5>مجموع قیمت:{formatCurrency(item.price * item.quantity)}</h5>
                  <button onClick={()=> dispatch({type: "REMOVE", payload: item})}>حذف از سبد</button>
                </div>
                <div className="add-to-cart">
                  <button onClick={() => dispatch({ type: "INCREASE", payload: item })}>+</button>
                  <span>تعداد: {item.quantity}</span>
                  <button onClick={() => {
                    if(item.quantity > 1){
                      dispatch({ type: "DECREASE", payload: item })
                    }else{
                      dispatch({ type: "REMOVE", payload: item })
                    }
                  }}>-</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

<div className="total">
  {
    total > 0 ? <p>مجموع قیمت: {formatCurrency(total)}</p> : <p>سبد خرید خالی است</p>
  }
</div>

    </>
  );
}
