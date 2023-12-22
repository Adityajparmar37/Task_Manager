import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import { AuthContext } from '../../context/AuthContext';

export default function MyNotes() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <h1>My Notes</h1>
            {/* Display the user's name if available */}
            <h1>{user && user.name}</h1>
        </>
    );
}
