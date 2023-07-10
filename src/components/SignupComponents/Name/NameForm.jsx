import React, { useState } from "react";
import Headline from "@/components/Headline";
import Paragraph from "@/components/Paragraph";
import { useForm } from "react-hook-form";
import Return from "@/components/Return";

const NameForm = ({ getIndex, formCount }) => {
  const [nameForm, setNameForm] = useState({
    fname: "",
    lname: "",
  });

  const handleSubmit = () => {
    getIndex(2);
    console.log("form added");
  };

  return (
    <div className={formCount === 1 ? "block" : "hidden"}>
            <Return text="Back" />

      <Headline text="Welcome! We're so happy you're here." />
      <Paragraph paragraph="What should we call you?" />
      <form onSubmit={() => handleSubmit()}>
        <div className="max-w-md mx-auto pt-4">
          <div>
            <div className="relative mt-2  ">
              <div className="pointer-events-none absolute z-50 inset-y-0 left-0 flex items-center ">
                <span className="font-normal text-[17px] tracking-wider">First name</span>
              </div>
              <input
                type="text"
                name="fname"
                value={nameForm.fname}
                required={true}
                onChange={(e) =>
                  setNameForm({ ...nameForm, fname: e.target.value })
                }
                className="block w-full pr-8 text-[19px] leading-[24px] placeholder:text-[rgba(60, 60, 67, 0.60)]  border-b border-[#C6C6C8] py-1.5 pl-24 text-gray-900 z-20 relative placeholder:text-[17px]    sm:text-sm sm:leading-6 focus:outline-none"
              />
              <div
                style={{ zIndex: "999999" }}
                className="absolute cursor-pointer inset-y-0 right-0 z-50 flex items-center"
              >
                <svg
                  className={
                    nameForm.fname === ""
                      ? "hidden"
                      : "block z-50 cursor-pointer"
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="18"
                  fill="none"
                  viewBox="0 0 17 18"
                  onClick={(e) => setNameForm({ ...nameForm, fname: "" })}
                >
                  <path
                    fill="#8E8E93"
                    fillRule="evenodd"
                    d="M8.5 17.5a8.5 8.5 0 100-17 8.5 8.5 0 000 17zm3.766-12.266a.8.8 0 010 1.132L9.63 9l2.635 2.634a.8.8 0 11-1.132 1.132L8.5 10.13l-2.634 2.635a.8.8 0 11-1.132-1.132L7.37 9 4.734 6.366a.8.8 0 011.132-1.132L8.5 7.87l2.634-2.635a.8.8 0 011.132 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <p className="text-[#FB3131] text-[15px] pt-1 hidden">jjjj</p>
          </div>
        </div>
        <div className="max-w-md mx-auto pt-4">
          <div>
            <div className="relative mt-2  ">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center ">
                <span className="font-normal ">Last name</span>
              </div>
              <input
                type="text"
                name="fname"
                value={nameForm.lname}
                required={true}
                onChange={(e) =>
                  setNameForm({ ...nameForm, lname: e.target.value })
                }
                className="block w-full pr-8 text-[19px] leading-[24px] placeholder:text-[rgba(60, 60, 67, 0.60)]  border-b border-[#C6C6C8] py-1.5 pl-24 text-gray-900  placeholder:text-[19px]    sm:text-sm sm:leading-6 focus:outline-none"
              />
              <div
                style={{ zIndex: "999999" }}
                className="absolute cursor-pointer inset-y-0 right-0 z-50 flex items-center"
              >
                <svg
                  className={
                    nameForm.lname === ""
                      ? "hidden"
                      : "block z-50 cursor-pointer"
                  }
                  onClick={(e) => setNameForm({ ...nameForm, lname: "" })}
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="18"
                  fill="none"
                  viewBox="0 0 17 18"
                >
                  <path
                    fill="#8E8E93"
                    fillRule="evenodd"
                    d="M8.5 17.5a8.5 8.5 0 100-17 8.5 8.5 0 000 17zm3.766-12.266a.8.8 0 010 1.132L9.63 9l2.635 2.634a.8.8 0 11-1.132 1.132L8.5 10.13l-2.634 2.635a.8.8 0 11-1.132-1.132L7.37 9 4.734 6.366a.8.8 0 011.132-1.132L8.5 7.87l2.634-2.635a.8.8 0 011.132 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <p className="text-[#8A8A8E] text-[15px] pt-1 font-normal">
              Last name is optional
            </p>

            <button
              type="submit"
              className={
                nameForm.fname && nameForm.lname
                  ? "w-full py-3 bg-primary text-white rounded-lg mt-10 font-semibold text-[19px]"
                  : "w-full py-3 bg-[#F2F2F7] text-[#9B9B9B] rounded-lg mt-10 font-semibold text-[19px]"
              }
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NameForm;
