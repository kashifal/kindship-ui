import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react"; 
import Link from "next/link";

export default function Modal({ isModalOpen, setIsModalOpen, inital }) {
  const [index, setIndex] = useState(inital);

  function lastIndexOf() {
    setIsModalOpen(false);
      setIndex(0);  
  }

  return (
    <Transition.Root show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setIsModalOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:px-6 pb-6">
                {index === 0 ? (
                  <div className=" py-6">
                    <div className="flex items-center justify-end">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1231 4.8741C16.5136 4.48357 16.5136 3.85041 16.1231 3.45989C15.7326 3.06936 15.0994 3.06936 14.7089 3.45989L9.79102 8.37778L4.87312 3.45989C4.4826 3.06936 3.84943 3.06936 3.45891 3.45989C3.06838 3.85041 3.06838 4.48357 3.45891 4.8741L8.3768 9.79199L3.45891 14.7099C3.06839 15.1004 3.06839 15.7336 3.45891 16.1241C3.84943 16.5146 4.4826 16.5146 4.87312 16.1241L9.79102 11.2062L14.7089 16.1241C15.0994 16.5146 15.7326 16.5146 16.1231 16.1241C16.5136 15.7336 16.5136 15.1004 16.1231 14.7099L11.2052 9.79199L16.1231 4.8741Z" fill="black" />
                      </svg>

                    </div>
                    
                    <div>

                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/[11%]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="64"
                          height="64"
                          fill="none"
                          viewBox="0 0 64 64"
                        >
                          <circle
                            cx="32"
                            cy="32"
                            r="32"
                            fill="#DC734C"
                            fillOpacity="0.11"
                          ></circle>
                          <path
                            fill="#DC734C"
                            d="M21.937 48.93c-2.046 0-2.95-1.934-1.806-3.459.579-.776 1.496-2.215 2.046-3.217-4.346-2.3-7.112-6.506-7.112-11.135 0-7.593 7.536-13.704 16.935-13.704 9.4 0 16.935 6.11 16.935 13.704 0 7.79-7.522 13.703-17.697 13.675-3.176 2.272-7.254 4.135-9.3 4.135zm2.047-3.769c1.213-.494 3.782-2.16 5.42-3.415.606-.494 1.058-.65 1.679-.65.38.015.691.015.917.015 7.353 0 13.224-4.488 13.224-9.992 0-5.518-5.871-10.006-13.224-10.006S18.776 25.6 18.776 31.119c0 3.556 2.428 6.675 6.52 8.623.918.437 1.158 1.171.678 2.046-.579 1.073-1.567 2.357-2.174 3.119-.197.24-.084.353.184.254z"
                          ></path>
                        </svg>
                      </div>
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title
                          as="h3"
                          className="text-[21px] font-semibold leading-6 text-gray-900"
                        >
                          Premium Supports
                        </Dialog.Title>
                        <div onClose={setIsModalOpen} className="mt-2">
                          <p className=" word-break text-[#8A8A8E] font-normal text-[16px] text-center">
                            Our support team (AKA "coaches") are parents who
                            live and breathe disability. We'll help you make the
                            most of the NDIS!
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        onClick={() => setIndex(1)}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                ) : index === 1 ? (
                  <div className="py-6">
                      <div className="flex items-center justify-end">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1231 4.8741C16.5136 4.48357 16.5136 3.85041 16.1231 3.45989C15.7326 3.06936 15.0994 3.06936 14.7089 3.45989L9.79102 8.37778L4.87312 3.45989C4.4826 3.06936 3.84943 3.06936 3.45891 3.45989C3.06838 3.85041 3.06838 4.48357 3.45891 4.8741L8.3768 9.79199L3.45891 14.7099C3.06839 15.1004 3.06839 15.7336 3.45891 16.1241C3.84943 16.5146 4.4826 16.5146 4.87312 16.1241L9.79102 11.2062L14.7089 16.1241C15.0994 16.5146 15.7326 16.5146 16.1231 16.1241C16.5136 15.7336 16.5136 15.1004 16.1231 14.7099L11.2052 9.79199L16.1231 4.8741Z" fill="black" />
                      </svg>

                    </div>
                    <div>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/[11%]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="64"
                          height="64"
                          fill="none"
                          viewBox="0 0 64 64"
                        >
                          <circle
                            cx="32"
                            cy="32"
                            r="32"
                            fill="#DC734C"
                            fillOpacity="0.11"
                          ></circle>
                          <path
                            fill="#DC734C"
                            d="M25.468 47.67c-3.204 0-4.954-1.75-4.954-4.981V21.59c0-3.218 1.75-4.982 4.954-4.982h6.972c2.088 0 3.231.353 4.6 1.736l6.775 6.845c1.397 1.411 1.721 2.512 1.721 4.714v12.786c0 3.218-1.75 4.982-4.953 4.982H25.468zm.437-3.64h14.24c1.2 0 1.75-.607 1.75-1.736V30.778h-6.83c-2.442 0-3.613-1.157-3.613-3.613V20.25h-5.547c-1.2 0-1.75.62-1.75 1.75v20.294c0 1.129.55 1.736 1.75 1.736zm9.428-16.244h6.28l-7.17-7.24v6.35c0 .608.283.89.89.89zm2.441 6.365c.536 0 .946.395.946.917 0 .536-.41.946-.946.946h-9.667c-.565 0-.96-.41-.96-.946 0-.522.395-.917.96-.917h9.667zm0 4.389a.94.94 0 01.946.96c0 .522-.41.917-.946.917h-9.667c-.565 0-.96-.395-.96-.918 0-.536.395-.96.96-.96h9.667z"
                          ></path>
                          <path
                            fill="#DC734C"
                            d="M22.71 48.309c-3.21 0-5.855-2.645-5.855-5.86 0-3.21 2.64-5.855 5.855-5.855 3.21 0 5.855 2.644 5.855 5.854 0 3.216-2.64 5.86-5.855 5.86zm-2.634-5.012h2.634a.53.53 0 00.532-.538V39.31c0-.3-.233-.532-.532-.532a.53.53 0 00-.538.532v2.917h-2.096c-.3 0-.532.232-.532.532 0 .3.233.538.532.538z"
                          ></path>
                          <path
                            fill="#FBF0EB"
                            fillRule="evenodd"
                            d="M22.71 43.297a.53.53 0 00.532-.538V39.31c0-.3-.233-.532-.532-.532a.53.53 0 00-.538.532v2.917h-2.096c-.3 0-.532.233-.532.532 0 .3.233.538.532.538h2.634zm0 7.076c-4.352 0-7.92-3.57-7.92-7.925 0-4.349 3.563-7.919 7.92-7.919 4.35 0 7.92 3.569 7.92 7.92 0 4.353-3.562 7.924-7.92 7.924zm-5.855-7.925c0 3.216 2.645 5.86 5.855 5.86 3.216 0 5.855-2.644 5.855-5.86 0-3.21-2.645-5.854-5.855-5.854-3.216 0-5.855 2.644-5.855 5.854z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title
                          as="h3"
                          className="text-[21px] font-semibold leading-6 text-gray-900"
                        >
                          Fast Payments
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-[#8A8A8E] font-normal text-[16px] text-center">
                            We're all about fast painless plan management
                            because we know you've got more important things to
                            do.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        onClick={() => setIndex(2)}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                ) : index === 2 ? (
                  <div className="py-6">
                     <div className="flex items-center justify-end">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1231 4.8741C16.5136 4.48357 16.5136 3.85041 16.1231 3.45989C15.7326 3.06936 15.0994 3.06936 14.7089 3.45989L9.79102 8.37778L4.87312 3.45989C4.4826 3.06936 3.84943 3.06936 3.45891 3.45989C3.06838 3.85041 3.06838 4.48357 3.45891 4.8741L8.3768 9.79199L3.45891 14.7099C3.06839 15.1004 3.06839 15.7336 3.45891 16.1241C3.84943 16.5146 4.4826 16.5146 4.87312 16.1241L9.79102 11.2062L14.7089 16.1241C15.0994 16.5146 15.7326 16.5146 16.1231 16.1241C16.5136 15.7336 16.5136 15.1004 16.1231 14.7099L11.2052 9.79199L16.1231 4.8741Z" fill="black" />
                      </svg>

                    </div>
                    <div>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/[11%]">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="79"
                          height="76"
                          fill="none"
                          viewBox="0 0 79 76"
                        >
                          <circle cx="32" cy="44" r="32" fill="#DC734C" fillOpacity="0.11"></circle>
                          <path
                            fill="#DC734C"
                            d="M20.71 58.402c-3.217 0-4.982-1.75-4.982-4.954V39.843c0-3.062.58-3.67 2.611-5.109l10.077-7.409c1.397-1.002 2.286-1.524 3.585-1.524 1.312 0 2.201.522 3.599 1.524l10.076 7.41c2.046 1.453 2.597 2.046 2.597 5.108v13.605c0 3.204-1.764 4.954-4.982 4.954h-22.58zm14.466-14.664l.621.621 7.423-7.38-9.568-7.128c-.621-.465-1.03-.706-1.651-.706s-1.03.24-1.651.706l-9.668 7.198 7.339 7.296.62-.607c1.073-1.044 2.132-1.524 3.275-1.524 1.143 0 2.202.48 3.26 1.524zm9.738-4.078v-.184l-7 6.958 7 6.887V39.66zm-25.827 0v13.478l6.831-6.718-6.83-6.775v.015zm11.375 6.407l-9.018 8.905h20.944l-9.018-8.905c-.565-.565-.988-.776-1.454-.776-.466 0-.89.226-1.454.776zM63.485 16.17l-1.233 1.752a.923.923 0 01-1.668-.341l-.446-2.095a7.56 7.56 0 00-2.99-4.59l-2.1-1.499c-.668-.476-.45-1.545.351-1.721l2.442-.537a7.566 7.566 0 004.63-3.167l1.27-1.877a.924.924 0 011.682.344l.431 2.224a7.565 7.565 0 003.017 4.73l2.036 1.45c.668.477.45 1.546-.352 1.723l-2.52.554a7.56 7.56 0 00-4.55 3.05zM70.343 28.594l-1.149.582a.555.555 0 01-.789-.652l.355-1.238a4.545 4.545 0 00-.29-3.28l-.692-1.388c-.22-.441.197-.947.672-.814l1.447.404a4.548 4.548 0 003.351-.373l1.204-.637a.555.555 0 01.795.657l-.399 1.302a4.547 4.547 0 00.266 3.361l.67 1.345c.22.441-.197.947-.672.814l-1.494-.417a4.544 4.544 0 00-3.275.334z"
                          ></path>
                        </svg>
                      </div>
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title
                          as="h3"
                          className="text-[21px] font-semibold leading-6 text-gray-900"
                        >
                          Free Resources
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-[#8A8A8E] font-normal text-[16px] text-center">
                          Become the best advocate you can be! We've crowdsourced the very best advice and support tools from families kicking NDIS goals.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                      <Link
                        type="button"
                        href='/Signup'
                        className="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        onClick={() => lastIndexOf()}
                      >
                        Sign up
                      </Link>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
