import Image from 'next/image'
import React from 'react'

import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/solid'
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'

function Header() {
  return (
    <div className="flex justify-between p-6 px-12">
      <div className='flex items-center'>
        <Image
          src="https://links.papareact.com/5me"
          priority
          width={40}
          height={40}
          layout="fixed"
          alt=""
        />
        <div className='flex items-center ml-4 bg-gray-200 rounded-full px-4 py-2'>
          <SearchIcon className='h-6 text-gray-400' />
          <input className='outline-none bg-transparent px-3' type="text" placeholder="Find friends and more..." />
        </div>
      </div>
    </div>
  )
}

export default Header
