import React from 'react'

const Badge = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='bg-blue-300/20 border border-blue-300 rounded-full text-blue-400/80 px-2 text-[14px]'>
        {children}
    </div>
  )
}

export default Badge