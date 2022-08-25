/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { useSession } from 'next-auth/react'

import { EmojiHappyIcon } from '@heroicons/react/outline'
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid'

import { collection, addDoc, serverTimestamp, doc, setDoc } from 'firebase/firestore'
import { db, storage } from '../../firebase'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'

function InputBox() {
  const {
    data: {
      user: { name, email, image },
    },
  } = useSession()
  const inputRef = useRef()
  const filepickerRef = useRef()
  const [imageUpload, setImageUpload] = useState()
  const [file, setFile] = useState()

  const postCollection = collection(db, 'posts')

  const sendPost = (e) => {
    e.preventDefault()

    if (!inputRef.current.value) return alert('Please fill in your post')

    addDoc(postCollection, {
      message: inputRef.current.value,
      name,
      email,
      image,
      timestamp: serverTimestamp(),
    })
      .then((document) => {
        if (imageUpload) {
          const storageRef = ref(storage, `posts/${document.id}`)
          const uploadTask = uploadBytesResumable(storageRef, file)

          removeUploadImage()

          uploadTask.on(
            'state_changed',
            null,
            (error) => alert(error),
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
                const postRef = doc(db, 'posts', document.id)
                await setDoc(postRef, { postImage: url }, { merge: true })
              })
            }
          )
        }
      })
      .catch((error) => alert(error))

    inputRef.current.value = ''
    inputRef.current.focus()
  }

  const uploadImage = (e) => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }

    reader.onload = (readerEvent) => {
      setImageUpload(readerEvent.target.result)
    }

    setFile(e.target.files[0])
  }

  const removeUploadImage = () => {
    setImageUpload(null)
  }

  return (
    <div className="my-6 mx-2 p-2 bg-white rounded-md shadow-md text-gray-500 font-medium md:mx-0">
      <div className="flex gap-x-4 items-center pt-4">
        <img className="hidden md:inline-flex w-10 h-10 rounded-full" src={image} alt="" />
        <form className="flex flex-col md:flex-row gap-y-4 flex-1" onSubmit={sendPost}>
          <input
            className="px-6 h-12 flex-grow bg-gray-200 rounded-full outline-none"
            type="text"
            placeholder={`What's on your mind now, ${name}?`}
            ref={inputRef}
          />
          {imageUpload && <button
            className="block bg-green-500 text-white px-4 py-2 rounded-full outline-none cursor-pointer"
            type="submit"
            onSubmit={sendPost}
          >
            Submit
          </button>}
        </form>
      </div>

      {imageUpload && (
        <div
          onClick={removeUploadImage}
          className="flex flex-col filter transform hover:scale-105 ease-in duration-150 hover:brightness-125 cursor-pointer"
        >
          <img className="mt-4 h-28 object-contain" src={imageUpload} alt="" />
          <p className="text-red-500 text-xs text-center">Remove</p>
        </div>
      )}

      <div className="flex items-center justify-around gap-x-2 md:gap-x-4 w-full py-4">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Video</p>
        </div>
        <div onClick={() => filepickerRef.current.click()} className="inputIcon">
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo</p>
          <input ref={filepickerRef} type="file" hidden onChange={uploadImage} />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling</p>
        </div>
      </div>
    </div>
  )
}

export default InputBox
