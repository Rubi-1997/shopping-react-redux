import React from "react";
import { selectCartItem,selectCartTotalPrice} from "../Redux/CartSlice";
import { useSelector} from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {


const cartItem=useSelector(selectCartItem)
const totalPrice=useSelector(selectCartTotalPrice)
  console.log(totalPrice)

  return (
    <>
      <div className="bg-primary d-flex justify-content-between p-3 align-items-center sticky-top">
        
        
        <div className="left">
         <h4> Shopping Mart</h4>
        </div>
        <div className="middle">
          <button className="btn btn-warning">
            <h6 className="text-white">cart item total-price={totalPrice}₹</h6>
          </button>
        </div>
        <Link to="/cart" className="right">
          <button type="button" className="btn  position-relative">
            <span class="material-symbols-outlined text-white">shopping_cart</span>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartItem.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
