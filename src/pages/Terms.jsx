import React from "react";

const Terms = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="20"
          fill="none"
          viewBox="0 0 12 20"
        >
          <path
            fill="#DC734C"
            d="M.29 10c0 .382.145.707.449 1l8.76 8.568c.235.247.55.371.909.371.73 0 1.303-.562 1.303-1.303 0-.36-.146-.685-.393-.932L3.423 10l7.895-7.704c.247-.258.393-.584.393-.943A1.28 1.28 0 0010.408.06c-.36 0-.674.124-.91.37l-8.76 8.57A1.376 1.376 0 00.29 10z"
          ></path>
        </svg>
        <h1 className="text-primary text-[17px] font-normal">Back</h1>
      </div>

      <h1 className="text-[30px] pt-4 text-primary font-bold">Service Agreement</h1>

      <div className="py-4">
        <span className="font-bold text-black text-[19px]">Services:</span>{" "}
        Service Provider agrees to provide the following services to the Client:
        [Specify the services in detail]
      </div>
      <div className="pb-4">
        <span className="font-bold text-black text-[19px]"> Term:</span> The
        term of this Agreement shall commence on [Start Date] and shall continue
        until [End Date] unless terminated earlier in accordance with the
        provisions of this Agreement.
      </div>

      <div className="pb-4">
        <span className="font-bold text-black text-[19px]"> Payment:</span>{" "}
        Client agrees to pay Service Provider the agreed-upon fee as follows:
        [Specify payment terms, including the amount, due date, and acceptable
        payment methods].
      </div>

      <div className="pb-4">
        <span className="font-bold text-black text-[19px]">
          {" "}
          Confidentiality:{" "}
        </span>{" "}
        Any intellectual property rights associated with the services provided
        by Service Provider shall remain the property of Service Provider unless
        otherwise specified in a separate agreement.
      </div>
      <div className="pb-4">
        <span className="font-bold text-black text-[19px]">
          {" "}
          Intellectual Property:
        </span>{" "}
        Both Parties agree to treat any confidential information shared during
        the course of this Agreement with the utmost confidentiality and not to
        disclose it to any third parties without prior written consent, except
        as required by law.
      </div>

      <div className="pb-4">
        <span className="font-bold text-black text-[19px]">Termination: </span>{" "}
        Either Party may terminate this Agreement by providing written notice to
        the other Party at least [number of days/weeks/months] in advance. In
        case of early termination, the Client shall be responsible for paying
        any outstanding fees for the services provided up to the termination
        date.
      </div>
    </div>
  );
};

export default Terms;
