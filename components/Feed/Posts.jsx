import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { query, orderBy, collection } from 'firebase/firestore'
import { db } from '../../firebase'
import { RefreshIcon } from '@heroicons/react/outline'
import Post from './Post'

function Posts() {
  const postsCollection = collection(db, 'posts')
  const q = query(postsCollection, orderBy('timestamp', 'desc'))
  const [realtimePosts, loading] = useCollection(q)

  if (loading) {
    return (
      <div className="flex items-center justify-center text-gray-500 mt-10">
        <RefreshIcon className="animate-spin h-16" />
      </div>
    )
  }

  return (
    <div>
      {realtimePosts?.docs.map((doc) => {
        const { name, image, postImage, message, timestamp } = doc.data()

        return (
          <Post key={doc.id} id={doc.id} name={name} image={image} postImage={postImage} message={message} timestamp={timestamp} />
        )
      })}
    </div>
  )
}

export default Posts
