/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { query, orderBy, collection } from 'firebase/firestore'
import { db } from '../../firebase'
import Image from 'next/image'

function Posts() {
  const postsCollection = collection(db, 'posts')
  const q = query(postsCollection, orderBy('timestamp', 'desc'))
  const [realtimePosts, loading, error] = useCollection(q)

  return (
    <div>
      {realtimePosts?.docs.map((doc) => {
        const { id, name, email, image, postImage, message, timestamp } = doc.data()

        return (
          <div className="flex flex-col bg-white rounded-2xl shadow-md mb-5 p-5" key={id}>
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

            <div className="bg-white p-4 relative h-56 md:h-96 rounded-2xl overflow-hidden">
              {postImage && <img className='w-full h-full object-cover rounded-2xl' src={postImage} alt="" />}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Posts
