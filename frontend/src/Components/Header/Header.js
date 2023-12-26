import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../Hooks/useAuth';

export default function Header() {

    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const HandleLogOut = async () => {
        await logout();
        navigate("/");
    }

    ///Testing
    return (
        <div className='bg-indigo-500/90'>
            <div className='flex justify-between items-center max-w-7xl mx-auto p-3'>
                <Link to="/">
                    <h1 className='font-bold text-2xl text-white'>Note Manager</h1>
                </Link>
                {user ? (<ul className='flex gap-4 text-lg text-white'>
                    <Link to="/notes">
                        <li>My Notes</li>
                    </Link>
                    <Link to="/profile">
                        <li>Profile</li>
                    </Link>
                    <Link to="/Logout">
                        <button onClick={HandleLogOut}>
                            <li>Logout</li>
                        </button>
                    </Link>
                </ul>) : (

                    <ul className='flex gap-4 text-white'>
                        <Link to="/login">
                            <li>Login</li>
                        </Link>
                        <Link to="/singup">
                            <li>Sign Up</li>
                        </Link>
                    </ul>
                )}
            </div>
        </div>
    )
}
