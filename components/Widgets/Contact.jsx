import Image from 'next/image'
import React from 'react'

function Contact({ name, src }) {
  return (
    <div className="relative flex items-center space-x-4 mb-4 mr-4 p-3 cursor-pointer rounded-xl hover:bg-gray-200 group">
      <Image src={src} alt="" width={50} height={50} objectFit="cover" className="rounded-full" />
      <h2 className="font-medium text-lg">{name}</h2>
      <div className="bg-green-500 rounded-full w-4 h-4 absolute bottom-2 left-7 group-hover:animate-bounce" />
    </div>
  )
}

export default Contact
