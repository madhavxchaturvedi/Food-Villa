import {
  faChevronDown,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import { ChevronDown, LogOut, User } from "lucide-react";

const UserDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const toggleDropdown = () => setOpen(!open);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        Navigate("/login");
        toast.success("You are Successfully Logout!");
        // dispatch(clearCart());
      })
      .catch((error) => {
        // Navigate("/error");
      });
  };
  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="relative inline-block cursor-pointer text-left"
      ref={dropdownRef}
    >
      <button
        onClick={toggleDropdown}
        className="flex items-center -m-1 transition hover:scale-105 ease-in px-2 py-1 gap-2 bg-white rounded-full "
      >
        <img
          src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
          alt="User"
          className="w-8 h-8 rounded-full"
        />
        <FontAwesomeIcon
          icon={faChevronDown}
          className="text-[#EB5B00]"
          size={18}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-50">
          <ul className="py-1">
            <li>
              <a
                href="#"
                className="flex items-center px-4 py-2 hover:bg-gray-100"
              >
                <FontAwesomeIcon icon={faUser} className="mr-2" size={18} />
                {user.displayName}
              </a>
            </li>
            <li>
              <button
                onClick={() => {
                  handleSignOut();
                }}
                className="flex items-center w-full px-4 py-2 hover:bg-gray-100"
              >
                <FontAwesomeIcon
                  icon={faRightFromBracket}
                  className="mr-2"
                  size={18}
                />
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
