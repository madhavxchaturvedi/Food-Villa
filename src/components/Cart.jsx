import { useSelector } from "react-redux";
import CartItemList from "./CartItemList";
import OrderSummary from "./OrderSummary";
import { selectItemsInCart } from "../utils/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector(selectItemsInCart);
  const user = useSelector((store) => store.user);

  return (
    <div className="w-[70%] m-auto py-8 pb-16 ">
      {cartItems && cartItems.length !== 0 && (
        <h1 className="text-3xl my-4 font-semibold">Cart</h1>
      )}

      {/* cart details */}
      <div className="min-h-[60vh] pb-8 md:flex gap-8">
        {/* cart items */}
        {cartItems.length !== 0 && user && <CartItemList />}
        {/* order summary */}
        <OrderSummary />
      </div>
    </div>
  );
};

export default Cart;
