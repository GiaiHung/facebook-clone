import React from 'react'

function HeaderIcon({ Icon }) {
  return (
    <div className="flex items-center cursor-pointer p-2 md:px-6 text-gray-500 rounded-lg hover:bg-gray-100 active:border-b-2 active:border-blue-500 group">
      <Icon className="h-6 group-hover:text-blue-500" />
    </div>
  )
}

export default HeaderIcon
