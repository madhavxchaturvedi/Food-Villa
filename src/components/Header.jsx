import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleNotch,
  faHeadset,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Titel = () => (
  <div className="logo text-[2.2rem]  pl-16 ">
    <Link to="/">
      <div className="flex items-center hover:scale-105 transition  delay-150">
        <div className="afacad-flux-title ">Food Villa</div>
      </div>
    </Link>
  </div>
);

// functional component
const Header = () => {
  const [isLogBtn, setIsLogBtn] = useState(true);
  const Navigate = useNavigate();
  const online = useOnline();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        Navigate("/");
      } else {
        dispatch(removeUser());
        Navigate("/login");
      }
    });
    //Unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="z-60 navbar flex justify-center bg-[#28282B] h-24 pt-5 shadow-lg shadow-gray-500">
      <div className="w-[92%] flex justify-between">
        <Titel />
        <div className="nav-items flex gap-4  pt-2 text-white text-[1.25rem]  pr-6 work-sans-nav-items ">
          <div className="py-1">
            <h2 data-testid="online-status ">{online ? "✅" : "🔴"}</h2>
          </div>
          <ul className="flex">
            {/* <Link to="/about">
              <li className="px-2 py-1 transition  hover:text-[#87c727]  ease-in">
                <FontAwesomeIcon icon={faCircleNotch} className="pr-1" />
                About
              </li>
            </Link> */}
            <Link to="/contact">
              <li className="px-4 transition ease-in hover:text-[#87c727] py-1">
                <FontAwesomeIcon icon={faHeadset} className="pr-1" />
                Contact
              </li>
            </Link>
            {/* <Link to="/instamart">
              <li className="px-4">Instamart</li>
            </Link> */}
            <Link to="/cart">
              <li>
                <button
                  className="px-4 py-1 bg-white text-[#7fba24] rounded-md hover:scale-105 transition ease-in"
                  data-testid="cart"
                >
                  <div className="absolute pl-[4.2rem] -mt-[0.6rem]">
                    <span class="relative flex h-[1.2rem] w-[1.2rem]">
                      {cartItems.length > 0 ? (
                        <>
                          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-90"></span>
                          <span class="relative inline-flex rounded-full h-[1.2rem] w-[1.2rem] bg-[#7fba24]"></span>
                        </>
                      ) : null}
                    </span>
                  </div>
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="text-lg pr-1"
                  />
                  Cart
                </button>
              </li>
            </Link>
          </ul>
          <div className="log-btn px-4 transition ease-in hover:text-[#87c727] py-1">
            {isLogBtn ? (
              <button onClick={() => setIsLogBtn(false)}>
                <FontAwesomeIcon icon={faRightFromBracket} className="pr-1" />
                logout
              </button>
            ) : (
              <Link to="/login">
                <button onClick={() => setIsLogBtn(true)}>
                  <FontAwesomeIcon icon={faRightFromBracket} className="pr-1" />
                  login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
