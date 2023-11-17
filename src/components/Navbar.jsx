import React from 'react'
const Navbar = () => {
  return (
    <div class="bg-blue-300">
    <header className="container mx-auto flex justify-between items-center text-white">
      <h1 className="text-4xl font-semibold">Yu_Blog</h1>
    </header>
    <ul className="md:flex justify-end">
    <li className="border-b md:border-none">
      <a href="#" class="block px-8 py-2 my-4 hover:bg-gray-100 rounded"
        >HRとは</a>
    </li>
    <li className="border-b md:border-none">
      <a href="#" className="block px-8 py-2 my-4 hover:bg-gray-100 rounded"
        >機能一覧</a>
    </li>
    <li className="border-b md:border-none">
      <a href="#" className="block px-8 py-2 my-4 hover:bg-gray-100 rounded"
        >料金プラン</a>
    </li>
    <li className="border-b md:border-none">
      <a href="#" className="block px-8 py-2 my-4 hover:bg-gray-100 rounded"
        >お知らせ</a>
    </li>
    <li>
      <a href="#" className="block px-8 py-2 my-4 hover:bg-gray-100 rounded"
        >お問い合わせ</a>
    </li>
  </ul>
  </div>
  )
}

export default Navbar