import Image from 'next/image'
import React from 'react'

function SidebarRow({ Icon, src, title }) {
  return (
    <div className='flex gap-x-4 items-center py-4 md:p-4 cursor-pointer hover:bg-gray-200'>
      {!src ? <Icon className='h-6 md:h-8 text-blue-500' /> : <Image src={src} alt='' width={40} height={40} className='rounded-full' layout='fixed' />}
      <h1 className='text-sm md:text-md hidden md:inline-flex font-medium'>{title}</h1>
    </div>
  )
}

export default SidebarRow
