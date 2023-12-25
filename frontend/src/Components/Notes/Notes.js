import React, { useState } from 'react';
import { BiSolidNote } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { deleteNote } from '../../Services/NoteService';
import UpdateNote from '../UpdateNote/UpdateNote';
import toast from 'react-hot-toast';

export default function Notes({ id, title, text, date, category, onDelete, setNotes }) {

    const handleDelete = async () => {
        // console.log("Delete ID ==> ", id)
        const data = await deleteNote(id);
        onDelete(id);
        toast.success("Remove note Successfully");
        // console.log(data);
    }

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const openModal = () => {
        // console.log("Modal open", modalIsOpen);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    return (
        <>
            <div className='relative w-80 h-72 rounded-[30px] bg-gray-200/40 text-black px-5 py-10 overflow-hidden m-5'>
                <div className='flex items-center mb-3'>
                    <span className='mr-2'>
                        <BiSolidNote size='1rem' />
                    </span>
                    <h2>{title}</h2>
                </div>
                <p className='text-sm leading-tight mt-5 font-semibold'>{text}</p>
                <div className='footer absolute bottom-0 w-full left-0'>
                    <h5 className='font-semibold ml-7'>{category}</h5>
                    <div className='flex items-center justify-between mb-3 px-8 py-3'>
                        <h5>{date}</h5>
                        <span className='w-7 h-7 bg-slate-200 rounded-full flex items-center justify-center'>
                            <button onClick={handleDelete}>
                                <MdDelete size='1rem' color='#000' />
                            </button>
                        </span>
                    </div>
                    <div className='tag w-full py-4 bg-indigo-400 flex items-center justify-center hover:bg-indigo-500'>
                        <button onClick={openModal}>
                            <h3 className='text-sm font-semibold text-white'>Update Note</h3>
                        </button>
                        {modalIsOpen && (
                            <UpdateNote setNotes={setNotes} modalIsOpen={modalIsOpen} closeModal={closeModal} id={id} title={title} text={text} category={category} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}