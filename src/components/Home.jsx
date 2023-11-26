import { collection, deleteDoc, getDocs, doc } from 'firebase/firestore'
import { db, auth } from '../firebase'
import React, { useEffect, useState, } from 'react'


const Home = () => {
  const [postList, setPostList] = useState([])
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, 'posts'))
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

    }
    getPosts()
  }, [])

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'posts', id))
    window.location.href = '/'
  }
  return (
    <>
      {postList.map((post) => {
        return (
          <div className='flex justify-center'>
            <div className="mt-16 w-96 h-80  flex flex-col  bg-white border shadow-sm rounded-xl dark:bg-slate-700 dark:border-gray-900 dark:shadow-slate-700/[.7]">
              <div className="p-4 md:p-5">
              <p className="mt-2 mb-4 py-1 px-2 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                  {post.author.username}
                </p>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  {post.postText}
                </p>
                { post.author.id === auth.currentUser?.uid && (
                   <div className='flex justify-end'>
                   <button onClick={() => handleDelete(post.id)} className='border border-red-400 bg-red-400 text-white px-1 py-2 rounded-full'>削除</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Home
