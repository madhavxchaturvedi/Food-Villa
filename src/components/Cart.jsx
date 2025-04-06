import { useSelector } from "react-redux";
import CartItemList from "./CartItemList";
import OrderSummary from "./OrderSummary";
import { selectItemsInCart } from "../utils/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector(selectItemsInCart);

  return cartItems.length === 0 ? (
    <div className="min-h-screen flex flex-col mt-20  items-center ">
      <div className="text-4xl font-bold uppercase text-[#2E8B57] my-4 flex gap-2 items-center ">
        <img
          src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
          alt="Updated Soon"
          className="h-96 justify-center ml-5"
        />
        <div className="flex flex-col">
          Your cart is currently on a diet! Go ahead, fill it up with delicious
          options!
          <div className="mt-10 flex text-[#f37645] justify-between">
            <div className="text-2xl">
              Let’s turn that empty cart into a feast! Check out our delicious
              selections
            </div>
            <Link to="/">
              <button className="ml-9 px-3 py-1 text-white bg-[#38a567] rounded-2xl">
                <FontAwesomeIcon icon={faArrowRight} size="2xl" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-[70%] m-auto py-8 pb-16 ">
      {cartItems && cartItems.length !== 0 && (
        <h1 className="text-3xl my-4 font-semibold">Cart</h1>
      )}

      {/* cart details */}
      <div className="min-h-[60vh] pb-8 md:flex gap-8">
        {/* cart items */}
        <CartItemList />
        {/* order summary */}
        {cartItems && cartItems.length !== 0 && <OrderSummary />}
      </div>
    </div>
  );
};

export default Cart;
