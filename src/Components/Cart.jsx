import React from "react";
import { Link } from "react-router-dom";
import { clearCart, selectCartItem } from "../Redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItem);
  console.log(cartItem);

  return (
    <>
      <div className="text-center mt-4">
        {cartItem.length == 0 && (
          <>
            <h1 className="">Welcome to your Cart </h1>
            <h6>Your Cart is empty</h6>
            <Link to="/" className="btn btn-warning mt-4">
              shopping Now
            </Link>
          </>
        )}

        {cartItem.map((ele, key) => (
          <div key={ele.id} className="d-flex flex-wrap justify-content-center">
            <div class="card mb-3" style={{ maxWidth: "640px" }}>
              <div class="row g-0 p-4">
                <div class="col-md-4">
                  <img
                    src={ele.image}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8 mt-4">
                  <div class="card-body ">
                    <h5 class="card-title">{ele.title}</h5>
                    <div
                      className=" d-flex align-items-flex justify-content-between"
                      style={{ width: "200px" }}
                    >
                      <button className="btn btn-warning">{ele.price}₹</button>

                      <button className="btn btn-primary">buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {cartItem.length!= 0 && (
          <button
            className="btn btn-primary"
            onClick={() => dispatch(clearCart())}
          >
            clear To Cart
          </button>
        )}
      </div>
    </>
  );
};

export default Cart;
