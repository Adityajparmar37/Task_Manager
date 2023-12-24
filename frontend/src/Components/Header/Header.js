import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {

    ///Testing
    const user = true;
    return (
        <div className='bg-indigo-500/90'>
            <div className='flex justify-between items-center max-w-7xl mx-auto p-3'>
                <Link to="/">
                    <h1 className='font-bold text-2xl text-white'>Note Manager</h1>
                </Link>
                {user ? (<ul className='flex gap-4 text-1xl text-white'>
                    <Link to="/notes">
                        <li>My Notes</li>
                    </Link>
                    <Link to="/profile">
                        <li>Profile</li>
                    </Link>
                    <Link to="/Logout">
                        <li>Logout</li>
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
