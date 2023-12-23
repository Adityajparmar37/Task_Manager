import React from 'react';
import { FcSearch } from 'react-icons/fc';

export default function SearchBar() {
  return (
    <div className="flex flex-col p-2 py-3 m-h-screen">
      <div className="items-center justify-between w-full flex  p-2 mb-5 sticky">
        <input
          className="font-bold uppercase rounded-full w-full py-2 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
          type="text"
          placeholder="Search"
        />
        <div className="bg-orange-600 p-2 hover:bg-orange-800 cursor-pointer mx-2 rounded-full">
          <svg
            className="w-5 h-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
