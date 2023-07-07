import "@/styles/globals.css";
import { Fragment } from "react";
import Logo from "@/icons/Logo";
import QRCode from "@/icons/Qr";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <div className="max-w-7xl mx-auto py-16 flex sm:px-8 px-3">
      <div className="w-96 md:block hidden mt-6">
        <div>
          <Link href='/'>
          <Logo />
          </Link>
          <h1 className="text=[18px]   font-normal breeak-all pt-4">
            Conneect with parents <br />
            who just get it!
          </h1>
        </div>

        <div className="mt-44">
          <QRCode />
          <h1 className="text-[15px] font-semibold pt-4">
            Scan the QR code <br />
            and Explore our app
          </h1>
          <p className="text-[13px] pt-1 font-normal">Available for IOS & Android</p>
        </div>


        <div className="mt-24">
          <p className="pb-2">2023 kindship</p>
          <div className=" gap-4">
          <Link href="#" className="font-normal text-[14px] text-[#767678]">About app</Link>
          <Link href="#" className="font-normal pl-3 text-[14px] text-[#767678]">Privacy Policy</Link> <br />
          <Link href="#" className="font-normal text-[14px] text-[#767678]">Terms</Link>
          </div>
        </div>
      </div>


      {/* Main Content */}
      <div className="w-full p-8 overflow-scroll rounded-md bg-white shadow-sm ring-1 ring-gray-200 h-full min-h-[40vh]">
        <Component />
      </div>
      </div>
    </Fragment>
  );
}
