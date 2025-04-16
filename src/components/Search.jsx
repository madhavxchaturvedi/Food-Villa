import React from "react";
import { useState, useEffect } from "react";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IMG_CDN_URL } from "./Contants";
// import RestaurantSearchCard from "./RestaurantSearchCard";
import RestaurantCard, { withDiscountLabel } from "./RestaurantCard";
import { filterData } from "../utils/helper";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Search = () => {
  const [searchText, setSearchText] = useState();
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const RestaurantCardDiscount = withDiscountLabel(RestaurantCard);

  const [ErrorMessage, setErrorMessage] = useState("");

  const allRestaurentsData = useSelector(
    (store) => store.search?.allRestaurents
  );
  console.log(allRestaurentsData);
  const handleXClick = () => {
    if (searchText !== "") {
      setSearchText("");
    }
  };

  return (
    <div className="pt-20 min-h-screen mx-auto w-[85%]">
      <div className="px-2 flex items-center justify-start mx-auto w-full border-2 border-[text-[#686b78]] border-gray-300 text-[#686b78]">
        <input
          type="text"
          className="flex-1 px-3 py-3 focus:outline-none"
          placeholder="Search for restaurants"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <FontAwesomeIcon
          icon={faXmark}
          className="text-[#7e818d] py-2 pr-4 cursor-pointer"
          onClick={() => {
            handleXClick();
          }}
        />
        <button
          className="search-btn bg-[#EB5B00] hover:bg-orange-700 focus:ring focus:ring-indigo-300 shadow-lg  rounded-r-md text-white font-bold h-10  w-16 "
          onClick={() => {
            const data = filterData(searchText, allRestaurentsData);
            setfilteredRestaurants(data);
            if (data?.length === 0) {
              setErrorMessage(
                `Sorry, we couldn't find any results for "${searchText}"`
              );
            } else {
              setErrorMessage("");
            }
          }}
        >
          Search
        </button>
      </div>
      <div className="mx-auto mt-10 w-full">
        <div>
          {filteredRestaurants.length !== 0 ? (
            <div className="my-2 text-2xl font-semibold">
              Search Results for <strong>"{searchText}"</strong>
            </div>
          ) : (
            <>
              {ErrorMessage && (
                <div className="text-center mb-3 mt-5 text-xl bg-gray-200 py-6">
                  {ErrorMessage}
                </div>
              )}
              {allRestaurentsData !== null ? (
                <div>
                  <div className="flex justify-between mt-14 items-center mx-12 px-4">
                    <h1 className="font-bold text-[1.7rem] leading-3 tracking-tight">
                      All Restaurant
                    </h1>
                  </div>
                  <div className="restaurant-list flex mt-8 mb-36 flex-wrap justify-center">
                    {allRestaurentsData.map((restaurant) => {
                      return (
                        <Link
                          to={"/restaurentmenu/" + restaurant.info.id}
                          key={restaurant.info.id}
                        >
                          {restaurant?.info?.aggregatedDiscountInfoV3 ==
                          null ? (
                            <RestaurantCard {...restaurant.info} />
                          ) : (
                            <RestaurantCardDiscount {...restaurant.info} />
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <Shimmer />
              )}
            </>
          )}
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
      </div>
    </div>
  );
};
export default Search;
