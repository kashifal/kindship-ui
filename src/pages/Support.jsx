import React, { Fragment } from 'react';
import RoundLogo from '@/icons/RoundedLogo';
import Paragraph from '@/components/Paragraph';
import Headline from '@/components/Headline';
import Link from "next/link";
import ArrowUp from '@/icons/ArrowUp';




const Support = () => {
  return (
    <Fragment>
      
       <div className="flex flex-col py-12 px-8">
        <div className='mx-auto'><RoundLogo /></div>
        <h1 className="text-primary text-center text-[30px] font-bold">Kindship Premium</h1>
        <Paragraph paragraph="We've started working with you right now!" />
       </div>

    <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 ">
    <div className="rounded-lg ring-1 px-5 py-4 ring-gray-200">
       <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="52"
      fill="none"
      viewBox="0 0 52 52"
    >
      <circle cx="26" cy="26" r="26" fill="#DC734C" fillOpacity="0.11"></circle>
      <path
        fill="#DC734C"
        d="M20.62 37.321c-2.422 0-3.744-1.322-3.744-3.764V17.614c0-2.431 1.322-3.764 3.743-3.764h5.268c1.578 0 2.442.266 3.477 1.311l5.118 5.172c1.056 1.067 1.301 1.899 1.301 3.562v9.662c0 2.431-1.322 3.764-3.743 3.764H20.62zm.33-2.751h10.76c.906 0 1.322-.459 1.322-1.312v-8.702h-5.161c-1.845 0-2.73-.874-2.73-2.73v-5.225H20.95c-.907 0-1.323.47-1.323 1.322v15.335c0 .853.416 1.312 1.323 1.312zm7.123-12.274h4.746L27.4 16.825v4.799c0 .458.214.672.672.672zm1.845 4.809c.405 0 .715.299.715.693 0 .405-.31.715-.715.715h-7.305a.698.698 0 01-.725-.715c0-.394.299-.693.725-.693h7.305zm0 3.317a.71.71 0 01.715.725c0 .394-.31.693-.715.693h-7.305c-.426 0-.725-.299-.725-.693 0-.405.299-.725.725-.725h7.305z"
      ></path>
    </svg>

    <h1 className="text-[21px]  pt-6 font-semibold">Payment Provider</h1>
    <p className="text-[19px] text-[#000]">Coming soon</p>
       </div>
       <div className="rounded-lg ring-1 px-5 py-4 ring-gray-200">
       <svg
      xmlns="http://www.w3.org/2000/svg"
      width="62"
      height="58"
      fill="none"
      viewBox="0 0 62 58"
    >
      <circle cx="26" cy="32" r="26" fill="#DC734C" fillOpacity="0.11"></circle>
      <path
        fill="#DC734C"
        d="M17.47 43.403c-2.432 0-3.765-1.323-3.765-3.743V29.38c0-2.315.437-2.773 1.973-3.861l7.614-5.599c1.056-.757 1.727-1.151 2.708-1.151.992 0 1.664.394 2.72 1.151l7.614 5.599c1.546 1.098 1.962 1.546 1.962 3.86v10.28c0 2.421-1.333 3.744-3.764 3.744H17.469zm10.93-11.08l.47.469 5.608-5.578-7.23-5.385c-.469-.352-.778-.533-1.248-.533-.469 0-.778.181-1.247.533l-7.305 5.439 5.545 5.513.47-.458c.81-.79 1.61-1.152 2.473-1.152.864 0 1.664.362 2.464 1.152zm7.358-3.082v-.139l-5.29 5.257 5.29 5.204V29.241zm-19.515 0v10.184l5.161-5.076-5.161-5.119v.01zm8.595 4.841l-6.814 6.73h15.825l-6.814-6.73c-.427-.426-.747-.586-1.099-.586-.351 0-.671.17-1.098.586zM51.855 10.572l-.806 1.146a.604.604 0 01-1.09-.223l-.292-1.37a4.943 4.943 0 00-1.955-3.001l-1.373-.98c-.437-.311-.294-1.01.23-1.126l1.596-.35a4.947 4.947 0 003.028-2.071l.83-1.227a.604.604 0 011.099.225l.282 1.454a4.946 4.946 0 001.973 3.092l1.33.949c.437.311.295 1.01-.23 1.126l-1.647.362a4.943 4.943 0 00-2.975 1.994zM56.34 18.696l-.751.38a.363.363 0 01-.516-.426l.232-.81a2.97 2.97 0 00-.19-2.144l-.453-.907a.38.38 0 01.44-.533l.947.265a2.973 2.973 0 002.19-.244l.787-.417a.363.363 0 01.52.43l-.26.85a2.973 2.973 0 00.173 2.198l.439.88a.38.38 0 01-.44.532l-.977-.273a2.97 2.97 0 00-2.141.219z"
      ></path>
    </svg>

    <h1 className="text-[21px] text-[21px]  pt-6 font-semibold font-semibold">Personalised templates</h1>
    <p className="text-[19px] text-[#000]">Coming soon</p>
       </div>


       </div>



       <div className='bg-[#FBF0EB] rounded-lg px-8 pt-12 pb-8  my-12'>
      <div className="flex items-center justify-center mb-4">
      <div className="flex items-center gap-1">
      <div className="h-16 w-16 rounded-full overflow-hidden bg-[#EED6CB]">
        <img src="/ladies/lady_1.png" className="object-cover w-full mt-3.5" alt="" />
      </div>
      <div className="h-16 w-16 rounded-full overflow-hidden bg-[#EED6CB]">
        <img src="/ladies/lady_3.png" className="object-cover w-full mt-3.5" alt="" />
      </div>
      <div className="h-16 w-16 rounded-full overflow-hidden bg-[#EED6CB]">
        <img src="/ladies/lady_2.png" className="object-cover w-full mt-2" alt="" />
      </div>
        </div>
      </div>
        <Headline text="Let's tackle your NDIS plan together!" />
        <div className='max-w-xs mx-auto'>
        <Paragraph paragraph='Got questions or concerns? Chat with a Kindship Coach today!' /></div>
       <div className="flex my-6">
       <Link href="#" type="submit" className={ "max-w-sm py-3 mx-auto w-full flex items-center justify-center bg-primary text-white rounded-md mt-4 font-semibold text-[19px]" }>
          Open Support <span className='pl-2'><ArrowUp /></span>
        </Link>

        </div>
        </div>
         
  
    </Fragment>
  )
}

export default Support