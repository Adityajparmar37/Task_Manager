import React, { useState } from 'react';

export default function Filter() {
    return (
        <>
            <div className='flex flex-col bg-gray-200/40 w-1/5 mt-24 rounded-r-lg h-[30rem]'>
                <div>
                    <h1 className="font-semibold mt-10 ml-5 text-lg">Search</h1>
                    <input className='p-1 rounded-md ml-4 w-10/12 border-none' placeholder='Enter word'></input>
                </div>

                <div>
                    <h1 className="font-semibold mt-8 ml-5 text-lg">Title</h1>
                    <input className='p-1 rounded-md ml-4 w-10/12 border-none' placeholder='Eg: College'></input>
                </div>

                <div>
                    <h1 className="font-semibold mt-8 ml-5 text-lg">Category</h1>
                    <input className='p-1 rounded-md ml-4 w-10/12 border-none' placeholder='Eg: College'></input>
                </div>


                <div>
                    <h1 className="font-semibold mt-8 ml-5 text-lg">Sort by</h1>
                    <select
                        id="sortDropdown"
                        className="p-1 rounded-md mt-1 ml-4 border-none w-10/12 h-8">
                        <option value="">Select</option>
                        <option value="asc">Newest</option>
                        <option value="desc">Oldest</option>
                    </select>
                </div>
            </div>
        </>
    );
}
