import React from 'react'
import StoryCard from './StoryCard'

const stories = [
  {
    name: 'Bill Gates',
    src: '/images/bill-gates-avatar.jpg',
    profile: '/images/bill-gates.jpg',
  },
  {
    name: 'Elon Musk',
    src: '/images/elon-musk.jpg',
    profile: '/images/elon-musk-avatar.jpg',
  },
  {
    name: 'Jeff Bezos',
    src: '/images/jeff-bezos.jpg',
    profile: '/images/jeff-bezos-avatar.jpg',
  },
  {
    name: 'Mark Zuckerberg',
    src: '/images/mark-zuckerberg.jpg',
    profile: '/images/mark-zuckerberg-avatar.webp',
  },
]

function Stories() {
  return <div className='flex justify-center space-x-3 '>
    {stories.map((story, index) => <StoryCard key={index} {...story} />)}
  </div>
}

export default Stories
