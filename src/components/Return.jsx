import React from 'react'
import IconBack from '@/icons/IconBac'
import Link from 'next/link'

const Return = ({text}) => {
  return (
    <div className='flex items-center gap-2 relative sm:hidden my-3'>
      <IconBack />
      <p className="text-primary text-[17px] font-light">{text}</p>
        <Link href="/Signup" className="absolute w-full h-full top-0 left-0"> </Link>
    </div>
  )
}

export default Return 