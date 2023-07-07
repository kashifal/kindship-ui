import React, { Fragment, useState } from "react";
import Headline from "@/components/Headline";
import Paragraph from "@/components/Paragraph";
import Link from "next/link";

const ConnectNdis = () => {
  const [ndForm, setNdForm] = useState({
    lname: "",
    dob: "",
    ndis: "",
  });

  return (
    <Fragment>
      <div className="">
        <div>
          <div className="">
            <Headline text="This'll just take a minute." />
            <div className="max-w-2xl  mx-auto py-4">
              <Paragraph paragraph="We need a couple of details to get you started." />
            </div>
            <form onSubmit={() => handleSubmit()}>
              <div className="max-w-md mx-auto pt-4">
                <div>
                  <div className="relative mt-2  ">
                    <div className="pointer-events-none absolute z-50 inset-y-0 left-0 flex items-center ">
                      <span className="font-normal">
                        <span className="pl-2">Last name</span>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="phone"
                      value={ndForm.lname}
                      required={true}
                      onChange={(e) =>
                        setNdForm({ ...ndForm, lname: e.target.value })
                      }
                      className="block w-full pr-8 text-[19px] leading-[24px] placeholder:text-[rgba(60, 60, 67, 0.60)]  border-b border-[#C6C6C8] py-1.5 pl-28 text-gray-900 z-20 relative placeholder:text-[19px]    sm:text-sm sm:leading-6 focus:outline-none"
                      placeholder="Your child's last name?"
                    />
                    <div
                      style={{ zIndex: "999999" }}
                      className="absolute cursor-pointer inset-y-0 right-0 z-50 flex items-center"
                    >
                      <svg
                        className={
                          ndForm.lname === ""
                            ? "hidden"
                            : "block z-50 cursor-pointer"
                        }
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="18"
                        fill="none"
                        viewBox="0 0 17 18"
                        onClick={(e) =>
                          setNdForm({ ...ndForm, lname: "" })
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
                  <p className="text-[#FB3131] text-[15px] pt-1 hidden">jjjj</p>
                </div>
              </div>
              <div className="max-w-md mx-auto pt-4">
                <div>
                  <div className="relative mt-2  ">
                    <div className="pointer-events-none absolute z-50 inset-y-0 left-0 flex items-center ">
                      <span className="font-normal">
                        <span className="pl-2">Date of birth</span>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="phone"
                      value={ndForm.dob}
                      required={true}
                      onChange={(e) =>
                        setNdForm({ ...ndForm, dob: e.target.value })
                      }
                      className="block w-full pr-8 text-[19px] leading-[24px] placeholder:text-[rgba(60, 60, 67, 0.60)]  border-b border-[#C6C6C8] py-1.5 pl-28 text-gray-900 z-20 relative placeholder:text-[19px]    sm:text-sm sm:leading-6 focus:outline-none"
                      placeholder=" "
                    />
                    <div
                      style={{ zIndex: "999999" }}
                      className="absolute cursor-pointer inset-y-0 right-0 z-50 flex items-center"
                    >
                      <svg
                        className={
                          ndForm.dob === ""
                            ? "hidden"
                            : "block z-50 cursor-pointer"
                        }
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="18"
                        fill="none"
                        viewBox="0 0 17 18"
                        onClick={(e) =>
                          setNdForm({ ...ndForm, dob: "" })
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
                  <p className="text-[#FB3131] text-[15px] pt-1 hidden">jjjj</p>
                </div>
              </div>
              <div className="max-w-md mx-auto pt-4">
                <div>
                  <div className="relative mt-2  ">
                    <div className="pointer-events-none absolute z-50 inset-y-0 left-0 flex items-center ">
                      <span className="font-normal">
                        <span className="pl-2">NDIS number</span>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="phone"
                      value={ndForm.ndis}
                      required={true}
                      onChange={(e) =>
                        setNdForm({ ...ndForm, ndis: e.target.value })
                      }
                      className="block w-full pr-8 text-[19px] leading-[24px] placeholder:text-[rgba(60, 60, 67, 0.60)]  border-b border-[#C6C6C8] py-1.5 pl-28 text-gray-900 z-20 relative placeholder:text-[19px]    sm:text-sm sm:leading-6 focus:outline-none"
                      placeholder=" "
                    />
                    <div
                      style={{ zIndex: "999999" }}
                      className="absolute cursor-pointer inset-y-0 right-0 z-50 flex items-center"
                    >
                      <svg
                        className={
                          ndForm.ndis === ""
                            ? "hidden"
                            : "block z-50 cursor-pointer"
                        }
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="18"
                        fill="none"
                        viewBox="0 0 17 18"
                        onClick={(e) =>
                          setNdForm({ ...ndForm, ndis: "" })
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
                  <p className="text-[#FB3131] text-[15px] pt-1 hidden">jjjj</p>
                </div>
                <p className="text-[#8A8A8E] text-[15px] font-normal pt-4">
                  Your child's NDIS number (this should be 9 digits). You'll be
                  able to add more children later.
                </p>

                <button type="submit" className={ "w-full py-3 bg-[#F2F2F7] text-[#9B9B9B] rounded-md mt-10 font-semibold text-[19px]"}>Agree and continue</button>

                <p className="text-black text-[15px] text-center font-normal pt-4">
                By tapping "Agree and continue" you agree to our
                </p>
                <div className="flex">
                <Link className="text-center text-primary w-full mx-auto text-[15px]" href="#">Service Agreement</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ConnectNdis;
