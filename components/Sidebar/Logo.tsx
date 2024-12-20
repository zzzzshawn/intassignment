import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className=" sm:pb-5 flex  items-center justify-start gap-2">
            <div className="">
                <Image src="/assets/logo.svg" alt="CodeAnt AI" width={50} height={50} className='w-[30px] h-[32px]' />
            </div>
            <h1 className='font-satoshi text-[24px]'>CodeAnt AI</h1>
        </div>
  )
}

export default Logo