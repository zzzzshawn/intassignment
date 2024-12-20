import { Plus, RefreshCw } from 'lucide-react'
import React from 'react'

const TopBar = () => {
  return (
    <div className='w-full p-5 flex max-sm:flex-col sm:justify-between sm:items-center max-sm:gap-2'>
        <div className="">
            <h1 className='text-[32px] font-bold'>Repositories</h1>
            <p className='text-dark-1 font-extralight text-[14px]'>33 total repositories</p>
        </div>
        <div className="flex gap-2">
            <button className='flex gap-1 items-center justify-center p-2 border rounded-lg'>
                <RefreshCw size={18} className='text-dark-1 ' />
                <p className='text-[14px] text-dark-1'>Refresh All</p>
            </button>
            <button className='flex gap-1 items-center justify-center p-2 border rounded-lg bg-blue-500'>
                <Plus size={18} className='text-white' />
                <p className='text-[14px] text-white'>Add Repository</p>
            </button>
        </div>
    </div>
  )
}

export default TopBar