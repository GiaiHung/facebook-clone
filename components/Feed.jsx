import React from 'react'
import Stories from './Stories'

function Feed() {
  return (
    <div className='flex-grow h-screen pb-44 pt-6 mr-4 overflow-y-auto'>
      <div className='max-w-md mx-auto md:max-w-lg'>
        <Stories />
      </div>
    </div>
  )
}

export default Feed
