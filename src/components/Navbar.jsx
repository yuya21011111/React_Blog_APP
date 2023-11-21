import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog,  faHouse, faRightToBracket, faPaste, faBackward } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ isAuth }) => {
  return (
    <div class="bg-blue-300">
    <header className="container mx-auto flex justify-between items-center text-white">
      <Link to="/">
      <h1 className="text-4xl font-semibold">Yu_Blog</h1>
      </Link>
    </header>
    <ul className="md:flex justify-end">
    <li className="border-b md:border-none">
      <Link to="/blog" class="block px-8 py-2 my-4 hover:bg-gray-100 rounded"
        ><FontAwesomeIcon className='h-5 w-5 mr-2' icon={faBlog} />Yu_Blogとは？
      </Link>
    </li>
    <li className="border-b md:border-none">
      <Link to="/" className="block px-8 py-2 my-4 hover:bg-gray-100 rounded"
        ><FontAwesomeIcon className='h-5 w-5 mr-2' icon={faHouse} />Home
      </Link>
    </li>
    <li className="border-b md:border-none">
      <Link to="/createpost"className="block px-8 py-2 my-4 hover:bg-gray-100 rounded"
        ><FontAwesomeIcon className='h-5 w-5 mr-2' icon={faPaste} />Post
      </Link>
    </li>

    { isAuth ?  <li className="border-b md:border-none">
      <Link to="/logout"className="block px-8 py-2 my-4 hover:bg-gray-100 rounded"
        ><FontAwesomeIcon className='h-5 w-5 mr-2' icon={faBackward } />Logout
      </Link>
    </li> :  <li className="border-b md:border-none">
      <Link to="/login"className="block px-8 py-2 my-4 hover:bg-gray-100 rounded"
        ><FontAwesomeIcon className='h-5 w-5 mr-2' icon={faRightToBracket} />Login
      </Link>
    </li> }
  </ul>
  </div>
  )
}

export default Navbar