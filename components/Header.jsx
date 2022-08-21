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
import HeaderIcon from './HeaderIcon'

function Header() {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between p-2 md:px-10 shadow-md">
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          priority
          width={40}
          height={40}
          layout="fixed"
          alt=""
        />
        <div className="hidden md:flex items-center ml-4 bg-gray-200 rounded-full px-4 py-2">
          <SearchIcon className="h-6 text-gray-400" />
          <input
            className="outline-none bg-transparent px-3"
            type="text"
            placeholder="Find friends and more..."
          />
        </div>
      </div>

      <div className="flex justify-center flex-grow">
        <div className="flex gap-x-2 md:gap-x-6">
          <HeaderIcon Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      <div className="flex justify-end items-center space-x-3">
        {/* Profile pic */}
        <p className="font-semibold text-lg">Truong Giai Hung</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  )
}

export default Header
