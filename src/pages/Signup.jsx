import React, { Fragment, useState } from 'react'; 
import RegisterPhone from '@/components/SignupComponents/Phone/RegisterPhone';
import NameForm from '@/components/SignupComponents/Name/NameForm';
import ConnectNdis from '@/components/SignupComponents/NDIS/ConnectNdid';
import Terms from '@/components/SignupComponents/NDIS/Terms';
import VerifyEmail from '@/components/SignupComponents/Email/VerifyEmail';
import TariffPlan from '@/components/SignupComponents/Tariff/TariffPlan';

const Signup = () => {

  const [formCount, setFormCount] = useState(0);
  

  const getIndex = (value) => {
    setFormCount(value);
    console.log(value);
  }


  return (
    <Fragment>
      <div className='p-4 md:p-0'>
        {
          formCount === 0 ?   <RegisterPhone getIndex={getIndex} formCount={formCount} /> : formCount === 1 ? <NameForm formCount={formCount} getIndex={getIndex} /> : formCount === 2 ? <VerifyEmail getIndex={getIndex} formCount={formCount} /> : formCount === 3 ? <ConnectNdis getIndex={getIndex} formCount={formCount} /> : formCount === 4 ? <TariffPlan formCount={formCount} /> : ''
        } 
        {/* <Terms />  */}
        
      </div>
     
    </Fragment>
  )
}

export default Signup