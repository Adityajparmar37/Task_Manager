import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import toast from 'react-hot-toast';
import { updateNote } from '../../Services/NoteService';

export default function UpdateNote({ modalIsOpen, closeModal, id, title, text, category, setNotes }) {
    const [updateNoteData, setUpdateNoteData] = useState({
        title: title,
        content: text,
        category: category
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const noteData = await updateNote(id, updateNoteData);
            toast.success("Note updated successfully!");
            setNotes((prevData) => {
                return prevData.map((note) => {
                    if (note._id === id) {
                        return updateNoteData;
                    }
                    return note;
                });
            });
            // console.log("Update data ", noteData);
            closeModal();  // Optionally, close the modal upon successful update
        } catch (error) {
            toast.error("Note not updated. Please try again!");
            console.log("Error while updating note: ", error);
        }
    }

    const handleChange = (e) => {
        setUpdateNoteData({
            ...updateNoteData,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                    className="bg-zinc-100 w-[35rem] h-auto rounded-lg p-10 m-auto border-none"
                >
                    <div className="modal-content">
                        <h1 className='font-semibold focus:border-none border-none text-xl border-b-4 border-black mb-5'>Note Details</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col mb-4">
                                <label className="font-semibold text-md">Title :</label>
                                <input
                                    name="title"
                                    onChange={handleChange}
                                    type="text"
                                    className="p-1 rounded-md mt-2 outline-none focus:border-b-2 focus:border-black"
                                    placeholder="Title"
                                    value={updateNoteData.title}
                                />
                            </div>

                            <div className="flex flex-col mb-4">
                                <label className="font-semibold text-md">Description :</label>
                                <textarea
                                    name='content'
                                    onChange={handleChange}
                                    type="textarea"
                                    className="p-1 rounded-md mt-2 outline-none focus:border-b-2 focus:border-black"
                                    placeholder="Description"
                                    value={updateNoteData.content}
                                />
                            </div>

                            <div className="flex flex-col mb-4">
                                <label className="font-semibold text-md">Category :</label>
                                <input
                                    name='category'
                                    onChange={handleChange}
                                    type="text"
                                    className="p-1 rounded-md mt-2 outline-none focus:border-b-2 focus:border-black"
                                    placeholder="Category"
                                    value={updateNoteData.category}
                                />
                            </div>

                            <div className='flex justify-between'>
                                <button
                                    type="submit"
                                    className="bg-indigo-500/90 text-white px-4 py-2 outline-none rounded hover:bg-indigo-600 mt-4">
                                    Update
                                </button>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="bg-red-600 text-white px-4 py-2 outline-none rounded hover:bg-red-700 mt-4">
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>
        </>
    );
}
