import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import toast from "react-hot-toast";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(
      // fullName.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // SignUp User ---->
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          toast.success("You are Successfully LogIn!");
          Navigate("/");
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
              console.log(auth.currentUser);
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //SignIn User
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          Navigate("/");
          toast.success("You are Successfully LogIn!");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <div className="absolute">
        <img
          className="h-screen w-screen object-cover"
          src="https://wallpapers.com/images/hd/food-4k-1pf6px6ryqfjtnyr.jpg"
          alt="background_image"
        ></img>
      </div>
      <div className="absolute w-full h-full p-8 bg-opacity-50"></div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute backdrop-blur-lg w-[30%] h-[77%] px-16 py-10 my-24 mx-auto right-0 left-0 text-white  rounded-md bg-opacity-70"
      >
        <h1 className="font-bold  text-4xl py-4 my-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="p-4 my-3 w-full bg-[#111212] bg-opacity-70 border border-[#5e5e5e] rounded"
            type="text"
            name="name"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-4 my-3 w-full bg-[#111212] bg-opacity-70 border border-[#5e5e5e] rounded"
          type="text"
          name="email"
          placeholder="Email address"
        />
        <input
          ref={password}
          className="p-4 my-1 w-full  bg-[#111212] bg-opacity-70 border border-[#5e5e5e] rounded"
          type="password"
          name="password"
          placeholder="Password"
        />
        <p className="p-2 text-red-600">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="p-3 my-3 bg-[#e50914] w-full rounded text-base font-bold"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Food Villa? Sign Up now"
            : "Already registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
