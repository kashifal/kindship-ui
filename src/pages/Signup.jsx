import React, { Fragment } from 'react';
import Headline from '@/components/Headline';
import Paragraph from '@/components/Paragraph';
import Input from '@/components/Input';
import RegisterPhone from '@/components/SignupComponents/Phone/RegisterPhone';
import NameForm from '@/components/SignupComponents/Name/NameForm';
import ConnectNdis from '@/components/SignupComponents/NDIS/ConnectNdid';
import Terms from '@/components/SignupComponents/NDIS/Terms';
import VerifyEmail from '@/components/SignupComponents/Email/VerifyEmail';
import TariffPlan from '@/components/SignupComponents/Tariff/TariffPlan';

const Signup = () => {
  return (
    <Fragment>
      <div className=''>
        <RegisterPhone />
        <NameForm />
        <ConnectNdis />
        <Terms />
        <VerifyEmail />
        <TariffPlan />
      </div>
     
    </Fragment>
  )
}

export default Signup