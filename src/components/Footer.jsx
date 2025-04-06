import React from "react";
import { footer_content } from "./Contants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="flex bg-[#1b1b1b] text-[#ffffff99] flex-col items-center justify-center p-10">
        <div className="grid grid-cols-4 gap-x-[5%] w-[85%] mx-auto">
          <div>
            <div className="flex items-center" key="footer-details">
              {/* <img
                className="w-40 filter grayscale"
                src={footer_logo}
                alt="Footer Logo"
                style={{
                  backgroundColor: "[#110705]",
                  filter: "brightness(1) invert(1) hue-rotate(360deg)",
                }}
              /> */}
            </div>
            <h1 className="truncate">© 2025 FOOD VILLA</h1>
          </div>
          {footer_content.map((x, index) => (
            <div key={index} className={`${index === 2 ? "col-start-3 " : ""}`}>
              <h1 className="font-BasisGrotesquePro font-bold text-base leading-10 tracking-tighter text-white">
                {x.title}
              </h1>
              {[...x.data].map((k, idx) => (
                <div key={`${index}-${idx}`}>
                  <h2 className="my-2 cursor-pointer">{k}</h2>
                </div>
              ))}
            </div>
          ))}
          <div className="col-start-4 row-start-1">
            <h1 className="font-BasisGrotesquePro font-bold text-base leading-10 tracking-tighter text-white">
              We deliver to :
            </h1>
            <div className="flex justify-between mt-2 align-center items-center cursor-pointer border-[#ffffff70] border-solid border-[1px] w-fit px-2 rounded-xl">
              <h1 className="p-1 h-fit truncate">cities</h1>
              <div className="ml-2 pr-1">
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          "flex flex-col items-center justify-center pt-6 pb-10 text-[#ffffff99] bg-[#1b1b1b] w-full h-fit border-t-[#ffffff70] border-solid border-t-[1px]"
        }
      >
        <div className="grid grid-cols-4 gap-x-16 w-[80%]"></div>
      </div>
      <div className="flex flex-col w-full items-center justify-center bg-[#1b1b1b] text-white ">
        <div className="flex justify-between items-center gap-8 py-4">
          <a>
            <FontAwesomeIcon
              className="text-3xl hover:text-[#0a66c2]"
              icon={faLinkedin}
            />
          </a>
          <a className="text-3xl hover:text-[#333]">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a className="text-3xl hover:text-[#7289da]">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a className="text-3xl hover:text-[#d33592]">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className="flex justify-center items-center py-2 mb-12 gap-2">
          <p>2024 FOOD VILLA</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
