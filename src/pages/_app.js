import "@/styles/globals.css";
import { Fragment } from "react";
import Logo from "@/icons/Logo";
import QRCode from "@/icons/Qr";
import Link from "next/link"; 

export default function App({ Component, pageProps }) {
 
  return (
    <Fragment>
      <div className="max-w-[1070px] mx-auto sm:py-12 flex sm:px-8 ">
      <div className="w-96 md:block hidden mt-10">
        <div>
          <Link href='/'>
          <Logo />
          </Link>
          <h1 className="text=[18px] text-poppins  font-normal break-all pt-4">
            Conneect with parents <br />
            who just get it!
          </h1>
        </div>

        <div className="mt-44">
          <div className="bg-white w-fit p-2 rounded-lg">
          <QRCode />
          </div>
          <h1 className="text-[15px] text-poppins font-semibold pt-4">
            Scan the QR code <br />
            and Explore our app
          </h1>
          <p className="text-[13px] text-poppins pt-1 font-normal">Available for IOS & Android</p>
        </div>


        <div className="mt-24">
          <p className="pb-2">2023 kindship</p>
          <div className=" gap-4">
          <Link href="#" className="font-normal text-poppins text-[14px] text-[#767678]">About app</Link>
          <Link href="#" className="font-normal text-poppins pl-3 text-[14px] text-[#767678]">Privacy Policy</Link> <br />
          <Link href="#" className="font-normal text-poppins text-[14px] text-[#767678]">Terms</Link>
          </div>
        </div>
      </div>


      {/* Main Content */}
      <div className="w-full p-4 sm:p-8 overflow-scroll rounded-lg bg-white shadow-sm ring-1 ring-gray-200 h-full min-h-[40vh]">
        <Component {...pageProps} />
      </div>
      
      </div>
      <div className="ml-8 mt-8 block sm:hidden">
          <p className="pb-2">2023 kindship</p>
          <div className=" gap-4">
          <Link href="#" className="font-normal text-poppins text-[14px] text-[#767678]">About app</Link>
          <Link href="#" className="font-normal text-poppins pl-3 text-[14px] text-[#767678]">Privacy Policy</Link> <br />
          <Link href="#" className="font-normal text-poppins text-[14px] text-[#767678]">Terms</Link>
          </div>
        </div>
    </Fragment>
  );
}
