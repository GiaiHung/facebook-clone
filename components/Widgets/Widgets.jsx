import React from 'react'
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import Contact from './Contact'

const contacts = [
  { src: 'https://links.papareact.com/f0p', name: 'Jeff Bezos' },
  { src: 'https://links.papareact.com/kxk', name: 'Elon Musk' },
  { src: 'https://links.papareact.com/zvy', name: 'Bill Gates' },
  { src: 'https://links.papareact.com/snf', name: 'Mark Zuckerberg' },
  { src: 'https://links.papareact.com/d0c', name: 'Harry Potter' },
  { src: 'https://links.papareact.com/6gg', name: 'The Queen' },
  { src: 'https://links.papareact.com/r57', name: 'James Bond' },
]

function Widgets() {
  return (
    <div className='hidden lg:flex flex-col'>
      <div className="flex items-center justify-between text-gray-500 p-4 w-60">
        <h2 className="font-medium text-xl">Contacts</h2>
        <div className="flex items-center space-x-2">
          <DotsHorizontalIcon className="h-6 cursor-pointer" />
          <VideoCameraIcon className="h-6 cursor-pointer" />
          <SearchIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      {contacts.map(({ src, name }, index) => (
        <Contact key={index} name={name} src={src} />
      ))}
    </div>
  )
}

export default Widgets
