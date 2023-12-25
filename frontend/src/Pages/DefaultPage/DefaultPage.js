import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Hooks/useAuth';

export default function DefaultPage() {
    const { user } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        // If the user is logged in, navigate to "/notes"
        if (user) {
            navigate("/notes");
        }
    }, [user, navigate]);
    return (
        user ? (navigate("/notes")) : (
            <div className="flex flex-col items-center justify-center h-screen bg-slate-200 relative">
                <h1 className="text-[6vw] leading-none tracking-tighter text-center text-zinc-900 mb-8">Note Manager</h1>

                <div className="flex items-center justify-center relative">
                    {/* Login Button */}
                    <Link to="/login">
                        <button
                            type="button"
                            className="text-white bg-indigo-400 hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-lg md:text-xl px-8 py-4 text-center mb-2"
                        >
                            Login
                        </button>
                    </Link>
                    <Link to="/signup">
                        <button
                            type="button"
                            className="text-indigo-600 bg-zinc-100 hover:bg-zinc-300 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg md:text-xl px-8 py-4 text-center mb-2 ml-3"
                        >
                            Sign-Up
                        </button>
                    </Link>
                </div>
            </div>
        )
    );
}
