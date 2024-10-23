import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Title from "../component/title";
import Navbar from "../component/Navbar";
import { Shopcontext } from "../context/ShopContext";

const Cart = () => {
  const {
    cartItems,
    currency,
    delevaryfee,
    calculateTotal,
    calculateGrandTotal,
    deleteitem,
    quantity
  } = useContext(Shopcontext);

  return (
    <div>
      <Navbar />
      <div className="p-10">
        <div className="text-center text-2xl pt-10 border-t">
          <Title text1={"Your "} text2={" Cart"} />
        </div>
        {cartItems == null || cartItems.length === 0 ? (
          <div className="text-center mt-10">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <div className="mt-10">
            <ul className="space-y-4">
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b pb-4 mb-4"
                >
                  <div className="flex items-center">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-16 h-16 object-cover mr-4"
                    />
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p>{`Quantity: ${item.quantity}`}</p>
                      <p>{`Price: ${currency}${item.price}`}</p>
                    </div>
                  </div>
                  <div>

                  </div>
                  <div className="flex space-x-2 pd-2">
                    <button
                      className="border border bg-black text-white text-center rounded-xl px-2 pd-left-[4]"
                      onClick={() => quantity(item, 1)}
                    >
                      +
                    </button>
                    <button
                      className="border border bg-black text-white text-center rounded-xl px-2"
                      onClick={() => deleteitem(index)}
                    >
                      Delete
                    </button>
                    <button
                      className="border border bg-black text-white text-center rounded-xl px-2"
                      onClick={() => quantity(item, -1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                  </div>
                  <p>{`Total: ${currency}${item.price * item.quantity}`}</p>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-10 text-lg font-semibold">
              <p>Subtotal:</p>
              <p>{`${currency}${calculateTotal()}`}</p>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <p>Delivery Fee:</p>
              <p>{`${currency}${delevaryfee}`}</p>
            </div>
            <div className="flex justify-between text-xl font-bold mt-4">
              <p>Total:</p>
              <p>{`${currency}${calculateGrandTotal()}`}</p>
            </div>
            <div className="text-center mt-10">
              <Link to={"/payment"}>
                <button className="bg-blue-600 rounded-xl text-white px-8 py-3 text-sm active:bg-gray-700">
                  Payment
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
