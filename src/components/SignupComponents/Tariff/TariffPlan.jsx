import React, { useState } from "react";
import Headline from "@/components/Headline";
import Paragraph from "@/components/Paragraph";
import { useForm } from "react-hook-form";

const TariffPlan = () => {
  const [selectedPlans, setSelectedPlans] = useState([]);

  const plans = [
    { id: 1, name: 'New to the NDIS' },
    { id: 2, name: 'Self-managed' },
    { id: 3, name: 'Plan-managed' },
    { id: 4, name: 'NDIA-managed' },
    { id: 5, name: `I don't know` },
  ];

  const handlePlanSelection = (plan) => {
    const isSelected = selectedPlans.includes(plan);
    if (isSelected) {
      setSelectedPlans(selectedPlans.filter((selectedPlan) => selectedPlan !== plan));
      console.log(selectedPlans);
    } else {
      setSelectedPlans([...selectedPlans, plan]);
      console.log(selectedPlans);

    }
  };

  return (
    <div className="">
      <div className="max-w-md pb-4 mx-auto">
        <Headline text="Thanks! Tell us, how are you currently managing your plan?" />
      </div>
      <Paragraph paragraph="Select from the options below." />
      <div className="max-w-md py-6 mx-auto">
        <fieldset>
          <div className="mt-4 divide-y border-b divide-gray-200  border-gray-200">
            {plans.map((planOption) => (
              <div className="py-3" key={planOption.id}>
                <label className="custom-checkbox flex items-center justify-between flex-row-reverse">
                  <input
                    type="checkbox"
                    className="hidden"
                    onChange={() => handlePlanSelection(planOption)}
                  />
                  <span className="checkmark"></span>
                  <span className="text-[19px] font-normal">{planOption.name}</span>
                </label>
              </div>
            ))}
          </div>
        </fieldset>
        <button type="submit" className={selectedPlans.length !== 0 ? "w-full py-3 bg-primary text-white rounded-md mt-10 font-semibold text-[19px]" : "w-full py-3 bg-[#F2F2F7] text-[#9B9B9B] rounded-md mt-10 font-semibold text-[19px]"}>
          Next
        </button>
      </div>
    </div>
  );
};

export default TariffPlan;
