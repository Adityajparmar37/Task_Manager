import React, { useEffect, useState } from 'react';
import Create from '../../Components/Create/Create';
import Filter from '../../Components/Filter/Filter';
import Header from '../../Components/Header/Header';
import Loading from '../../Components/Loading/Loading';
import Notes from '../../Components/Notes/Notes';
import { useAuth } from '../../Hooks/useAuth';
import { getNotes } from '../../Services/NoteService';

export default function MyNotes() {
    const { user } = useAuth();
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const notesPerPage = 3; // Adjust this value based on your preference

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const noteData = await getNotes();
                setNotes(noteData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching notes:', error);
                setLoading(false);
            }
        };

        fetchNotes();
    }, [user]);

    const handleDeleteNote = (deletedNoteId) => {
        setNotes((prevNotes) => prevNotes.filter((note) => note._id !== deletedNoteId));
    }

    const indexOfLastNote = currentPage * notesPerPage;
    const indexOfFirstNote = indexOfLastNote - notesPerPage;
    const currentNotes = notes.slice(indexOfFirstNote, indexOfLastNote);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <Header />
            <div className='flex relative'>
                <Filter setNotes={setNotes} />
                <div className='grid grid-cols-3 gap-5 w-4/5 h-[39rem] mt-5 mx-auto ml-10'>
                    {loading ? (
                        <Loading />
                    ) : currentNotes.length > 0 ? (
                        currentNotes.map((noteData, index) => (
                            <Notes
                                key={index}
                                id={noteData._id}
                                title={noteData.title}
                                text={noteData.content}
                                date={noteData.date}
                                category={noteData.category}
                                onDelete={handleDeleteNote}
                                setNotes={setNotes}
                            />
                        ))
                    ) : (
                        <div className='flex items-center justify-center bg-indigo-500 w-32 ml-60 h-20 absolute top-1/2 left-1/3 rounded-md'>
                            <h1 className='text-white'>No Notes</h1>
                        </div>
                    )}
                </div>
            </div>
            <div className='ml-5 justify-center items-center'>
                <button
                    className='bg-indigo-500/90 text-white rounded-md p-3 h-12 w-20'
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span className='mx-4'>Current Page: {currentPage}</span>
                <button
                    className='bg-indigo-500/90 text-white rounded-md p-3 h-12 w-20'
                    onClick={() => paginate(currentPage + 1)}
                    disabled={indexOfLastNote >= notes.length}
                >
                    Next
                </button>
            </div>
            <Create notes={notes} setNotes={setNotes} />
        </>
    );
}
