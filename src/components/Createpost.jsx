import React, { useState } from 'react'

const Createpost = () => {
  const [title, setTitle] = useState()
  const [postText, setPostText] = useState()

  const createPost = () => {
    console.log(title,postText)
  }

  return (
    <>
      <section className="text-gray-600 w-full flex flex-col items-center px-2">
      <h1 className="text-3xl font-bold mt-10">記事を投稿する</h1>
      {/* <form className="shadow-md rounded-md bg-white w-full max-w-2xl p-10"> */}
        <div className="flex sm:items-center mb-6 flex-col sm:flex-row">
          <label
            className="block sm:w-1/3 font-bold sm:text-right mb-1 pr-4"
            for="name"
            >タイトル<span class="text-red-600"> * </span></label>
          <input
            className="block w-full sm:w-2/3 bg-gray-200 py-2 px-3 text-gray-700 border border-gray-200 rounded focus:outline-none focus:bg-white"
            id="name"
            type="text"
            placeholder="タイトルの記入"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
  
        <div className="flex sm:items-center mb-6 flex-col sm:flex-row">
          <label
            className="block sm:w-1/3 font-bold sm:text-right mb-1 pr-4"
            for="body"
            >投稿 <span class="text-red-600"> * </span>
            </label>
            <textarea
            className="block w-full sm:w-2/3 bg-gray-200 py-2 px-3 text-gray-700 border border-gray-200 rounded focus:outline-none focus:bg-white"
            name="body"
            id="body"
            cols="30"
            rows="10"
            placeholder='投稿内容を記入'
            onChange={(e) => setPostText(e.target.value)}
          >
          </textarea>
        </div>
        <div className='flex justify-end'>
        <button onClick={createPost}  className='border border-sky-500 bg-sky-500 text-white px-1 py-2 rounded-full'>投稿する</button>
        </div>
      {/* </form> */}
    </section>
    </>
  )
}

export default Createpost