import Image from 'next/image'
import React from 'react'
import { useSession } from 'next-auth/react'

import { EmojiHappyIcon } from '@heroicons/react/outline'
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid'

function InputBox() {
  const { data: session } = useSession()

  const sendPost = (e) => {
    e.preventDefault()
  }

  return (
    <div className="my-6 p-2 bg-white rounded-md shadow-md text-gray-500 font-medium">
      <div className="flex gap-x-4 items-center pt-4">
        <Image
          className="rounded-full"
          src={session.user.image}
          alt=""
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1" onSubmit={sendPost}>
          <input
            className="px-6 h-12 flex-grow bg-gray-200 rounded-full outline-none"
            type="text"
            placeholder={`What's on your mind now, ${session.user.name}?`}
          />
        </form>
      </div>

      <div className="flex items-center justify-around gap-x-4 w-full py-4">
        <div className="inputIcon">
          <CameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live video</p>
        </div>
        <div className="inputIcon">
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  )
}

export default InputBox
