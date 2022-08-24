/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline'
import { ThumbUpIcon as ThumbUpIconSolid } from '@heroicons/react/solid'
import { collection, deleteDoc, doc, onSnapshot, setDoc } from 'firebase/firestore'
import { db } from '../../firebase'

function Post({ id, name, image, postImage, message, timestamp }) {
  const [likes, setLikes] = useState([])
  const [hasLikes, setHasLikes] = useState(false)

  const { data: session } = useSession()

  useEffect(
    () => onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) => setLikes(snapshot.docs)),
    [id]
  )

  useEffect(
    () => setHasLikes(likes.findIndex((like) => like.id === session?.user?.uid) !== -1),
    [likes, session?.user?.uid]
  )

  const likePost = async () => {
    if (hasLikes) {
      await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid))
    } else {
      await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
        username: session.user.name,
      })
    }
  }

  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-md mb-5 p-5 mx-4 md:mx-0">
      <div>
        <div className="flex gap-x-4 items-center">
          <Image src={image} alt="" width={40} height={40} className="rounded-full" />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-gray-400 text-xs">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
        <p className="text-lg my-2">{message}</p>
      </div>

      {/* Image */}
      <div className="bg-white p-4 relative h-56 md:h-96 rounded-2xl overflow-hidden">
        {postImage && (
          <img className="w-full h-full object-cover rounded-2xl" src={postImage} alt="" />
        )}
      </div>

      {/* Like and share */}
      <div className="flex flex-col">
        {likes.length > 0 && (
          <div className='mb-2'>
            <p className="font-medium text-gray-500">
              {likes.length} {likes.length === 1 ? 'like' : 'likes'}
            </p>
          </div>
        )}
        <hr className="border-1 border-gray-300 mx-auto w-full" />
        <div className="flex items-center justify-between text-gray-500 -ml-3 md:mx-auto w-full">
          <div className="inputIcon justify-center" onClick={likePost}>
            {hasLikes ? (
              <ThumbUpIconSolid className="h-5 md:h-8 text-blue-500" />
            ) : (
              <ThumbUpIcon className="h-5 md:h-8" />
            )}
            <p>Like</p>
          </div>
          <div className="inputIcon justify-center">
            <ChatAltIcon className="h-5 md:h-8" />
            <p>Comment</p>
          </div>
          <div className="inputIcon justify-center">
            <ShareIcon className="h-5 md:h-8" />
            <p>Share</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
