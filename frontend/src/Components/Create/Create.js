import React, { useState } from 'react';
import Modal from 'react-modal';
import { BsPlusCircleFill } from 'react-icons/bs';

export default function Create() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            <div>
                <div className="fixed bottom-10 right-24">
                    <BsPlusCircleFill
                        className="text-indigo-500/90 text-5xl cursor-pointer"
                        onClick={openModal}
                    />
                </div>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                    className="bg-zinc-100 w-[35rem] h-auto rounded-lg p-10 m-auto border-none"
                >
                    <div className="modal-content">
                        <h1 className='font-semibold focus:border-none border-none text-xl border-b-4 border-black mb-5'>Note Details</h1>
                        <form>
                            <div className="flex flex-col mb-4">
                                <label className="font-semibold text-md">Title :</label>
                                <input
                                    type="text"
                                    className="p-1 rounded-md mt-2 outline-none focus:border-b-2 focus:border-black"
                                    placeholder="Title"
                                />
                            </div>

                            <div className="flex flex-col mb-4">
                                <label className="font-semibold text-md">Description :</label>
                                <textarea
                                    type="textare"
                                    className="p-1 rounded-md mt-2 outline-none focus:border-b-2 focus:border-black"
                                    placeholder="Description"
                                />
                            </div>

                            <div className="flex flex-col mb-4">
                                <label className="font-semibold text-md">Category :</label>
                                <input
                                    type="text"
                                    className="p-1 rounded-md mt-2 outline-none focus:border-b-2 focus:border-black"
                                    placeholder="Category"
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-indigo-500/90 text-white px-4 py-2 outline-none rounded hover:bg-indigo-600 mt-4"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </Modal>
            </div>
        </>
    );
}
