import React from "react";
import { useEffect, useState } from "react";
import { addToCart, selectCartItem } from "../Redux/CartSlice";
import { useSelector, useDispatch } from "react-redux";

const Product = () => {
  const [data, setdata] = useState([]);
  const dispatch = useDispatch();
  // using useSelector() for showing and assign an value from CartSlice.
  const cartItem = useSelector(selectCartItem);
  console.log(cartItem);

  useEffect(() => {
    const fetchData = async () => {
      const product = await fetch("https://fakestoreapi.com/products");
      const fetchproduct = await product.json();
      setdata(fetchproduct);
    };

    fetchData();
  }, []);

  const handleToCart = (ele) => {
    // using dispatch for add a for taking an actionn
    dispatch(addToCart(ele));
  };

  // console.log(data)

  return (
    <>
      <div className="container mt-4">
        <div className="d-flex flex-wrap gap-4 align-items-center justify-content-center">
          {data.map((ele) => (
            <div key={ele.id} className="">
              <div className="card p-4">
                <img
                  src={ele.image}
                  style={{ width: "250px", height: "200px" }}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h6
                    className="card-title text-sm"
                    style={{ maxWidth: "224px" }}
                  >
                    {ele.title}
                  </h6>
                  <p className="card-text">{ele.price}</p>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-warning">{ele.price}₹</button>

                    <button
                      className="btn btn-primary"
                      onClick={() => handleToCart(ele)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
