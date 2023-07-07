import { EnvelopeIcon } from '@heroicons/react/20/solid'

export default function Input({type, title, errorMessage, placeholder, isPhone, required}) {
  return (
    <div className="max-w-md mx-auto pt-4">
    <div> 
      <div className="relative mt-2  shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center ">
        {isPhone ? '🇦🇺' : ''} <span className="font-normal ">{title}</span>
        </div>
        <input
          type={type}
          name={type}
          required={required}
          className={isPhone ? "block w-full text-[19px] leading-[24px] placeholder:text-[rgba(60, 60, 67, 0.60)]  border-b border-[#C6C6C8] py-1.5 pl-24 text-gray-900  placeholder:text-[19px]    sm:text-sm sm:leading-6 focus:outline-none" : "block w-full text-[19px] leading-[24px] placeholder:text-[rgba(60, 60, 67, 0.60)]  border-b border-[#C6C6C8] py-1.5 pl-28 text-gray-900  placeholder:text-[19px]    sm:text-sm sm:leading-6 focus:outline-none"}
          placeholder={placeholder}
        />
      </div>
      <p className='text-[#FB3131] text-[15px] pt-1 hidden'>{errorMessage}</p>
    </div>
    </div>
  )
}
