import React, { useEffect, useState } from 'react';
import { getNotes } from '../../Services/NoteService';

export default function Filter({ setNotes, pageSize }) {
    const [sort, setSort] = useState("");
    const [filters, setFilters] = useState({
        keywordSearch: "",
        title: "",
        category: ""
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [showpage, setShowPage] = useState();

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                console.log(filters);
                const { paginatedNotes, CurrentPage } = await getNotes(filters, sort, currentPage, pageSize);
                setNotes(paginatedNotes);
                setShowPage(CurrentPage);
                console.log('Fetched notes:', paginatedNotes);
            } catch (error) {
                console.error('Error fetching notes:', error);
            }
        };

        fetchNotes();
    }, [filters, setNotes, sort, currentPage, pageSize]);


    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    return (
        <div className='relative flex flex-col w-1/5 mt-24 h-[40rem]'>
            <div className='flex flex-col h-[30rem] bg-gray-200/40 rounded-r-lg'>
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
                    <input className='p-1 rounded-md ml-4 w-10/12 border-none' placeholder='Eg: College' onChange={(e) => setFilters({ ...filters, category: e.target.value })}></input>
                </div>

                <div>
                    <h1 className="font-semibold mt-8 ml-5 text-lg">Sort by</h1>
                    <select
                        onChange={(e) => setSort(e.target.value)}
                        id="sortDropdown"
                        className="p-1 rounded-md mt-1 ml-4 border-none w-10/12 h-8"
                    >
                        <option value="">Select</option>
                        <option value="new">New</option>
                        <option value="old">Old</option>
                    </select>
                </div>
            </div>

            <div className='flex absolute bottom-24 justify-center items-center ml-3'>
                <button
                    onClick={handlePreviousPage}
                    className='bg-indigo-500 text-white rounded-md p-3 h-12 w-20 mb-2'
                >
                    Previous
                </button>
                <span className='mx-4'>Page : {showpage}</span>
                <button
                    onClick={handleNextPage}
                    className='bg-indigo-500 text-white rounded-md p-3 h-12 w-20'
                >
                    Next
                </button>
            </div>
        </div>
    );
}
