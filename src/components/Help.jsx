import React from "react";
import { useEffect, useState } from "react";
import { support_data } from "./Contants";
import FAQItem from "./FAQItem.jsx";

const Help = () => {
  const init = support_data
    .filter((x) => {
      return x.title === "General issues";
    })
    .map((x) => {
      return x.data;
    });
  const titles = support_data.map((data) => {
    return data.title;
  });
  const [helpTitle, setHelpTitle] = useState([]);
  const [FAQ, setFAQ] = useState([]);
  const [activeTitle, setActiveTitle] = useState(false);
  useEffect(() => {
    setHelpTitle(titles);
    setActiveTitle(0);
    setFAQ(...init);
  }, []);
  const handleClick = (event, index) => {
    event.preventDefault();
    const text = event.target.textContent;
    const qna = support_data.filter((x) => {
      return x.title === text;
    });
    setFAQ(
      ...qna.map((x) => {
        return x.data;
      })
    );
    setActiveTitle(index);
  };
  return (
    <div className="min-h-screen min-w-[85%] mx-auto">
      <div className="text-white bg-[#e9ecee] pb-20 px-10">
        <div className="flex flex-col flex-1 pt-14 px-8 xl:max-w-[80%] lg:max-w-[80%] md:max-w-[90%] sm:max-w-[90%] mx-auto">
          <h1 className="mt-5 font-extrabold text-4xl text-black">Help & Support</h1>
          <h4 className="pb-12 font-semibold text-base text-black">
            Let's take a step ahead and help you better.
          </h4>
        </div>
        <div className="flex bg-white text-[#545a79] mx-auto p-10 shadow-xl xl:max-w-[80%] lg:max-w-[80%] md:max-w-[90%] sm:max-w-[90%]">
          <div className="py-5 pl-3 bg-[#EB5B00] sticky top-20 list-none min-w-fit  h-fit">
            {helpTitle.map((curr, index, value) => {
              return (
                <div
                  key={index}
                  className={`text-[#ffffff] ml-2 px-4 py-5 text-[16.5px] font-normal cursor-pointer hover:text-black hover:font-bold ${
                    activeTitle === index ? "bg-white" : ""
                  }`}
                  onClick={(event) => handleClick(event, index)}
                >
                  <a
                    href=""
                    className={`ml-10 ${
                      activeTitle === index ? "font-bold text-black" : ""
                    }`}
                  >
                    {value[index]}
                  </a>
                </div>
              );
            })}
          </div>
          <div className="w-full pl-10 pt-4 ">
            {FAQ.map((curr, index, val) => {
              return (
                <FAQItem {...val[index]} key={val[index].id} index={index} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Help;
