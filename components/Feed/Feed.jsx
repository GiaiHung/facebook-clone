import React from 'react'
import Stories from './Stories'
import InputBox from './InputBox'
import Posts from './Posts'

function Feed() {
  return (
    <div className='flex-grow h-screen pb-44 pt-6 mr-4 overflow-y-auto bg-gray-300'>
      <div className='max-w-md mx-auto md:max-w-lg'>
        <Stories />
        <InputBox />
        <Posts />
      </div>
    </div>
  )
}

export default Feed
