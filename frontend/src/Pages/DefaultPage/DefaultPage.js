import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function DefaultPage() {
    const { user } = useContext(AuthContext);
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-slate-200 relative">
            <h1 className="text-[6vw] leading-none tracking-tighter text-center text-zinc-700 mb-8">Note Manager</h1>

            <div className="flex items-center justify-center relative">
                {/* Login Button */}
                <Link to="/login">
                    <button
                        type="button"
                        className="text-white bg-orange-600 hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-lg md:text-xl px-8 py-4 text-center mb-2"
                    >
                        Login
                    </button>
                </Link>
                <Link to="/signup">
                    <button
                        type="button"
                        className="text-orange-600 bg-zinc-100 hover:bg-zinc-300 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg md:text-xl px-8 py-4 text-center mb-2 ml-3"
                    >
                        Sign-Up
                    </button>
                </Link>
            </div>
        </div>
    );
}
