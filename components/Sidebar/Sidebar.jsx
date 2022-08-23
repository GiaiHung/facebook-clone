import React from 'react'
import { useSession } from 'next-auth/react'
import SidebarRow from './SidebarRow'

import { CalendarIcon, ClockIcon, DesktopComputerIcon, UsersIcon } from '@heroicons/react/solid'
import { ChevronDownIcon, ShoppingBagIcon, UserGroupIcon } from '@heroicons/react/outline'

function Sidebar() {
  const { data: session, status } = useSession()

  return (
    <div className='p-2 w-fit lg:min-w-[300px] shadow-[10px_0px_10px_-5px_rgba(0,0,0,0.1)] min-h-screen'>
      <SidebarRow src={session.user.image} title={session.user.name} />
      <SidebarRow Icon={UsersIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  )
}

export default Sidebar
