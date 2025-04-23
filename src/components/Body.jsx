import { restaurantList, WOYM_CARD_IMG_CDN_URL } from "./Contants";
import RestaurantCard, { withDiscountLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { filterData } from "../utils/helper";
import Slider from "./Slider";
import { useDispatch } from "react-redux";
import { addAllRestaurents } from "../utils/searchSlice";
import ScrollToTopButton from "./ScrollToTopButton";

const Body = () => {
  const [allRestaurants, setallRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [WOYM, setWOYM] = useState([]);
  const dispatch = useDispatch();
  // const { user, setUser } = useContext(userContext);

  const RestaurantCardDiscount = withDiscountLabel(RestaurantCard);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=27.1766701&lng=78.00807449999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING
    );
    const json = await data.json();
    // console.log(json);

    const WOYMData = json?.data?.cards
      ?.map((x) => {
        return x?.card?.card;
      })
      ?.filter((x) => {
        return x["id"] === "whats_on_your_mind";
      })
      ?.map((x) => {
        //we have to get all the images in the whats on your mind with image grid
        return x?.imageGridCards?.info;
      });

    setWOYM(...WOYMData);

    setallRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    dispatch(
      addAllRestaurents(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      )
    );

    setfilteredRestaurants(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  console.log(WOYM);
  // const offline = useOnline();
  // if (!offline) {
  //   return <h1>🔴Offline, Please check your internet connection</h1>;
  // }

  if (!allRestaurants) return null;
  // if (filteredRestaurants.length === 0)
  //   return <h1>Restaurants are not found!!</h1>;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <>
        <div className="body xl:max-w-[85%] mx-auto min-h-screen">
          <div className="mx-auto header">
            <div className="header-contents">
              <h2>Order your favourite food here</h2>
              <p>
                Choose from a diverse menu featuring a delectable array of
                dishes crafted with the finest ingredients and culinary
                expertise. Our mission is to satisfy your cravings and elevate
                your dining experience, one delicious meal at a time.
              </p>
              <button>View Menu</button>
            </div>
          </div>
          {WOYM && (
            <>
              <div className="flex justify-between mx-12 px-4">
                <h1 className="font-bold text-[1.7rem] leading-3 tracking-tight">
                  What's on your mind?
                </h1>
                <Slider className="foodCategory" amount={350} />
              </div>
              <div className="foodCategory container-snap mx-12 flex p-4 no-scrollbar overflow-x-auto">
                {WOYM.map((img) => {
                  return (
                    <div
                      className="cursor-pointer flex-shrink-0 pr-6 first:pl-4"
                      key={img.id}
                    >
                      {/* this will take you to the swiggy website's food app */}
                      {/* <a href={img.action.link}> */}
                      <img
                        className="h-[180px] w-[144px]"
                        src={WOYM_CARD_IMG_CDN_URL + img.imageId}
                        alt="what's on your mind restaurant"
                      />
                      {/* </a> */}
                    </div>
                  );
                })}
              </div>
            </>
          )}
          <hr className="my-8 mx-auto text-gray-300" />
          <div className="flex justify-between items-center mx-12 mt-10 px-4">
            <h1 className="font-bold text-[1.7rem] leading-3 tracking-tight">
              Top Rated Restaurant
            </h1>
            <Slider className="topResList" key="topResList" amount={450} />
          </div>
          <div className="topResList container-snap mx-12 p-4 flex mt-2 mb-2 no-scrollbar overflow-x-auto">
            {filteredRestaurants.map((restaurant) => {
              return (
                <Link
                  to={"/restaurentmenu/" + restaurant.info.id}
                  key={restaurant.info.id}
                >
                  <RestaurantCard {...restaurant.info} />
                </Link>
              );
            })}
          </div>
          <hr className="my-8 mx-auto text-gray-300" />
          <div className="flex justify-between mt-14 items-center mx-12 px-4">
            <h1 className="font-bold text-[1.7rem] leading-3 tracking-tight">
              All Restaurant
            </h1>
          </div>
          <div className="restaurant-list flex mt-8 mb-36 flex-wrap justify-center">
            {filteredRestaurants.map((restaurant) => {
              return (
                <Link
                  to={"/restaurentmenu/" + restaurant.info.id}
                  key={restaurant.info.id}
                >
                  {restaurant?.info?.aggregatedDiscountInfoV3 == null ? (
                    <RestaurantCard {...restaurant.info} />
                  ) : (
                    <RestaurantCardDiscount {...restaurant.info} />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </>
    </>
  );
};

export default Body;
