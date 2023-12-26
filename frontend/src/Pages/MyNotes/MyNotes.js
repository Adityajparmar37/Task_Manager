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

    // console.log(notes.map((noteData,index)=>{
    //     console.log(noteData._id)
    // }))
    const handleDeleteNote = (deletedNoteId) => {
        setNotes((prevNotes) => prevNotes.filter((note) => note._id !== deletedNoteId));
    }

    return (
        <>
            <Header />
            <div className='flex relative'>
                <Filter setNotes={setNotes}/>
                <div className='grid grid-cols-3 gap-5 w-4/5 h-[39rem] mt-5 mx-auto'>
                    {loading ? (
                        <Loading />
                    ) : notes.length > 0 ? (
                        notes.map((noteData, index) => (
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
            <Create notes={notes} setNotes={setNotes} />
        </>
    );
}
