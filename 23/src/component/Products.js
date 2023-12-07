import React from "react";
import Navbar from "./Navbar";
import { Data } from "../data";
import formatCurrency from './util.js'

export default function Products() {
  return (
    <>
      <Navbar />
      <div className="products">
        {
            Data.map((item)=>{
                <div className="products-item">
                    <img src={item.image} />
                    <div className="product-item-text">
                        <div className="product-item-info">
                            <h4>{item.title}</h4>
                            <h5>{formatCurrency(item.price)}</h5>
                        </div>
                    </div>
                    <div className="add-to-cart">
                <button>افزودن سبد خرید</button>
                    </div>
                </div>
            })
        }
      </div>
    </>
  );
}
