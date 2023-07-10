import React, { Fragment, useEffect, useState } from "react";
import Headline from "@/components/Headline";
import Paragraph from "@/components/Paragraph";
import Input from "@/components/Input";
import VerifyPhone from "./VerifyPhone"; 
import Return from "@/components/Return";
const RegisterPhone = ({getIndex, formCount}) => {
  const [phoneForm, setPhoneForm] = useState({
    phone: "",
  });

 



  return (
    <Fragment>
      <div>
        <div>
          <div className={formCount === 0 ? "block" : "hidden"}>
            <Return text="Premium" />
            <Headline text="Hey there! What's your number?" />
            <div className="max-w-2xl  mx-auto py-4">
              <div className="max-w-2xl mx-auto">
              <Paragraph paragraph="Yep, we ask for it straight away. This helps us weed out the weirdos and keep you and your data safe. We'll send you an SMS message to double check we've got it right." />
              </div>
            </div>
            <form onSubmit={() => handleSubmit()}>
              <div className="max-w-md mx-auto pt-4">
                <div>
                  <div className="relative mt-2  ">
                    <div className="pointer-events-none absolute z-50 inset-y-0 left-0 flex items-center ">
                      <span className="font-normal text-[17px] tracking-wider">
                        🇦🇺 <span className="pl-2">+91</span>
                      </span>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={phoneForm.phone}
                      required={true}
                      onChange={(e) =>
                        setPhoneForm({ ...phoneForm, phone: e.target.value })
                      }
                      className="block w-full pr-8 text-[19px] leading-[24px] placeholder:text-[rgba(60, 60, 67, 0.60)]  border-b border-[#C6C6C8] py-1.5 pl-24 text-gray-900 z-20 relative placeholder:text-[17px]    sm:text-sm sm:leading-6 focus:outline-none"
                      placeholder="Mobile number"
                    />
                    <div
                      style={{ zIndex: "999999" }}
                      className="absolute cursor-pointer inset-y-0 right-0 z-50 flex items-center"
                    >
                      <svg
                        className={
                          phoneForm.phone === ""
                            ? "hidden"
                            : "block z-50 cursor-pointer"
                        }
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="18"
                        fill="none"
                        viewBox="0 0 17 18"
                        onClick={(e) =>
                          setPhoneForm({ ...phoneForm, phone: "" })
                        }
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
                  <p className="text-[#FB3131] text-[15px] pt-1 hidden">Oops, that doesn't look right. Please try again</p>

                </div>
                <button onClick={() => getIndex(1)} type="submit" className={phoneForm.phone ? "w-full py-3 bg-primary text-white rounded-lg mt-10 font-semibold text-[19px]" : "w-full transition-all duration-300 py-3 bg-[#F2F2F7] text-[#9B9B9B] rounded-lg  mt-10 font-semibold text-[19px]"}>Next</button>
              </div>
            </form>
          </div>
        </div>
        {/* <VerifyPhone /> */}
      </div>
    </Fragment>
  );
};

export default RegisterPhone;
