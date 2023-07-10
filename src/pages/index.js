import Image from "next/image";
import { Inter } from "next/font/google";
import { Fragment, useState } from "react";
import Slider from "@/components/Slider";
import Modal from "@/components/Modal";
import Link from "next/link"; 

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [modal, setModal] = useState(false);
  const inital = 0;
  return (
    <Fragment>
      <main>
        <Slider />
        <div className="px-4">
          <div className="max-w-sm mx-auto my-4">
            <h1 className="text-[30px] font-semibold text-primary leading-8	 text-center">
              You were never meant <br /> to do this alone!
            </h1>
          </div>
          <div className="max-w-lg mx-auto mb-8 ">
            <p className="text-[21px] text-center font-normal leading-7">
              Let's make the most of your NDIS journey. Choose Kindship as your
              Plan Manager and we'll walk with you every step of the way.
            </p>
          </div>

          <div className="flex mt-8 mb-4">
            <button
              onClick={() => setModal(true)}
              className="px-24 md:px-32 tracking-wide text-[19px] font-semibold text-center rounded-lg text-white mx-auto py-4 inline-block bg-primary whitespace-nowrap"
            >
              Learn More
            </button>
          </div>
          <div className="max-w-xs mx-auto">
            <span className="block tracking-wider text-center text-[#8A8A8E] text-[19px] font-normal">
              Kindship Premium fees are <br /> fully funded by NDIS life
              choices.
            </span>
          </div>
        </div>
 
        <Modal isModalOpen={modal} setIsModalOpen={setModal} inital={inital} />
      </main>
    </Fragment>
  );
}
