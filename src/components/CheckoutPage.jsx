import { useState } from "react";
import CartItemList from "./CartItemList";
import { IMG_CDN_URL } from "./Contants";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  selectItemsInCart,
  selectTotalPrice,
} from "../utils/cartSlice";
import toast from "react-hot-toast";
import Success from "./Success";

const CheckoutPage = () => {
  // const user = useSelector((store) => store.user);
  const cartItems = useSelector(selectItemsInCart);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();

  const discount = (totalPrice * 0.1) / 100;
  const deliveryCharges = (totalPrice * 0.05) / 100;
  const totalAmt = totalPrice / 100 + deliveryCharges - discount;

  const [orderPurchase, setOrderPurchase] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const handleOrderPurchase = () => {
    setOrderPurchase(true);
    dispatch(clearCart());
    toast.success("Your Order is successfully ordered!🎉");
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePurchase = () => {
    // You can handle the purchase logic here
    console.log("Purchasing with:", formData);
    alert("Order Placed!");
  };

  return orderPurchase === true ? (
    <div className="w-full">
      <Success />
    </div>
  ) : (
    <div className="p-5 max-w-7xl mx-auto">
      {/* <h2 className="text-2xl font-bold mb-6">Checkout</h2> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Cart Summary */}
        <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold text-gray-700 mb-6">
            Cart Summary
          </h3>
          {/* Example cart items */}

          <ul className="basis-7/12">
            {cartItems &&
              cartItems.map((item) => (
                <li
                  key={item?.item?.card?.info?.id}
                  className="flex gap-4 hover:scale-105 transition delay-150 justify-between max-w-[600px] my-4"
                >
                  <div className="basis-3/18 ">
                    <img
                      className="w-full h-full md:h-auto object-cover block rounded-md aspect-square"
                      src={IMG_CDN_URL + item?.item?.card?.info?.imageId}
                      alt=""
                    />
                  </div>
                  <div className="basis-10/12">
                    <p className="text-lg font-semibold text-[#414449]">
                      {item?.item?.card?.info?.name}
                    </p>

                    <p className="hidden md:block text-base text-[#676a6d] font-medium opacity-85">
                      {item?.item?.card?.info?.description?.length > 50
                        ? item?.item?.card?.info?.description.slice(0, 50) +
                          "..."
                        : item?.item?.card?.info?.description}
                    </p>

                    <p className="my-2 space-x-1">
                      <span className="font-bold">
                        ₹&nbsp;
                        {parseFloat(
                          (
                            item?.quantity *
                            parseFloat(
                              item?.item?.card?.info?.price
                                ? item?.item?.card?.info?.price / 100
                                : item?.item?.card?.info?.defaultPrice / 100
                            )
                          ).toFixed(2)
                        )}
                      </span>
                      <span className="text-gray-800 font-normal">
                        (
                        {item?.item?.card?.info?.price
                          ? item?.item?.card?.info?.price / 100
                          : item?.item?.card?.info?.defaultPrice / 100}
                        × {item?.quantity})
                      </span>
                    </p>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        {/* Shipping Details */}
        <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold mb-4 text-gray-700">
            Shipping Details
          </h3>
          <form className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* City and Zip Code in one row */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block mb-2 font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-1/2">
                <label className="block mb-2 font-medium text-gray-700">
                  Zip Code
                </label>
                <input
                  type="text"
                  name="zipCode"
                  placeholder="Zip Code"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Purchase Button */}
            {/* <button
              type="button"
              onClick={handlePurchase}
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition"
            >
              Purchase
            </button> */}
          </form>
          <h3 className="text-3xl font-semibold text-gray-700 mb-4 mt-3">
            Payment Details
          </h3>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Card Number
              </label>
              <input
                type="text"
                name="Card Number"
                placeholder="Card Number"
                // onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Address */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block mb-2 font-medium text-gray-700">
                  Expiry Date
                </label>
                <input
                  type="date"
                  name="Expiry Date"
                  placeholder="Expiry Date"
                  // onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-1/2">
                <label className="block mb-2 font-medium text-gray-700">
                  CVV
                </label>
                <input
                  type="text"
                  name="CVV"
                  placeholder="CVV"
                  // onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="my-2 border-b border-gray-300">
              <div className="md:flex py-3 border-gray-300 border-t justify-between items-center font-bold text-lg md:text-2xl">
                <h4>Total Amount</h4>
                <h1 className="text-[#EB5B00] text-3xl">
                  ₹ {parseFloat(totalAmt).toFixed(2)}
                </h1>
              </div>
            </div>
            <button
              className="w-full block hover:scale-105 transition delay-150  mt-5 uppercase font-bold text-lg bg-[#EB5B00] text-white text-center p-4 rounded-md"
              onClick={() => handleOrderPurchase()}
            >
              Order Purchase
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
