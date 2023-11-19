import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div class="bg-blue-300">
    <header className="container mx-auto flex justify-between items-center text-white">
      <h1 className="text-4xl font-semibold">Yu_Blog</h1>
    </header>
    <ul className="md:flex justify-end">
    <li className="border-b md:border-none">
      <Link to="/blog" class="block px-8 py-2 my-4 hover:bg-gray-100 rounded"
        >Blogとは？
      </Link>
    </li>
    <li className="border-b md:border-none">
      <Link to="/" className="block px-8 py-2 my-4 hover:bg-gray-100 rounded"
        >Home
      </Link>
    </li>
    <li className="border-b md:border-none">
      <Link to="/createpost"className="block px-8 py-2 my-4 hover:bg-gray-100 rounded"
        >Post
      </Link>
    </li>
    <li className="border-b md:border-none">
      <Link to="/login"className="block px-8 py-2 my-4 hover:bg-gray-100 rounded"
        >Login
      </Link>
    </li>
  </ul>
  </div>
  )
}

export default Navbar