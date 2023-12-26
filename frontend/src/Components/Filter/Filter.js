import React, { useEffect, useState } from 'react';
import { getNotes } from '../../Services/NoteService';

export default function Filter({ setNotes }) {
    const [sort, setSort] = useState("");
    const [filters, setFilters] = useState({
        keywordSearch: "",
        title: "",
        Category: ""
    })


    useEffect(() => {
        const fetchNotes = async () => {
            try {
                console.log(filters)
                const noteData = await getNotes(filters, sort);
                setNotes(noteData);
                console.log('Fetched notes:', noteData);
            } catch (error) {
                console.error('Error fetching notes:', error);
            }
        };

        fetchNotes();
    }, [filters, setNotes, sort]);
    return (
        <>
            <div className='flex flex-col bg-gray-200/40 w-1/5 mt-24 rounded-r-lg h-[30rem]'>
                <div>
                    <h1 className="font-semibold mt-10 ml-5 text-lg">Search</h1>
                    <input className='p-1 rounded-md ml-4 w-10/12 border-none' placeholder='Enter word' onChange={(e) => setFilters({ ...filters, keywordSearch: e.target.value })}></input>
                </div>

                <div>
                    <h1 className="font-semibold mt-8 ml-5 text-lg">Title</h1>
                    <input className='p-1 rounded-md ml-4 w-10/12 border-none' placeholder='Eg: College' onChange={(e) => setFilters({ ...filters, title: e.target.value })}></input>
                </div>

                <div>
                    <h1 className="font-semibold mt-8 ml-5 text-lg">Category</h1>
                    <input className='p-1 rounded-md ml-4 w-10/12 border-none' placeholder='Eg: College' onChange={(e) => setFilters({ ...filters, Category: e.target.value })}></input>
                </div>


                <div>
                    <h1 className="font-semibold mt-8 ml-5 text-lg">Sort by</h1>
                    <select
                        onChange={(e) => setSort(e.target.value)}
                        id="sortDropdown"
                        className="p-1 rounded-md mt-1 ml-4 border-none w-10/12 h-8">
                        <option value="">Select</option>
                        <option value="new">New</option>
                        <option value="old">Old</option>
                    </select>
                </div>
            </div>
        </>
    );
}
