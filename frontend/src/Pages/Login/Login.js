import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Loading from '../../Components/Loading/Loading';
import { login } from '../../Services/UserService';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthContext';


export default function Login() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);


    ///API EndPoint
    const handlerSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const LoginResponse = await login(form);
            // console.log(LoginResponse)

            if (LoginResponse.success === true) {
                localStorage.setItem("userInfo", JSON.stringify(LoginResponse))
                toast.success('Successfully Login !', {
                    icon: '👏',
                    style: {
                        width: '15rem',
                        color: 'white',
                        background: '#3FFF00'
                    }
                })
                navigate("/notes");
                setLoading(false);
            }
            else {
                setLoading(false);
                // console.log(LoginResponse.message);
                toast.error(LoginResponse.message, {
                    iconTheme: {
                        primary: '#000',
                    },
                    style: {
                        width: '15rem',
                        color: 'white',
                        background: 'red'
                    }
                });
            }
        } catch (error) {
            setLoading(false);
            toast.error("Some Error Occured !")
            console.error("Login API Frontend Error: ", error);
        }
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }



    return (
        // <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-screen max-h-screen bg-slate-200'>
        <div className=" flex items-center justify-center relative py-16 bg-gradient-to-br from-sky-50 to-gray-200 h-screen max-h-screen ">
            <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
                {/* {loading && <Loading />} */}
                <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                    <div className="rounded-xl bg-white shadow-xl">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm pt-5">
                            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Sign in to your account
                            </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm p-3">
                            <form className="space-y-6" onSubmit={handlerSubmit}>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                            Password
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        Sign in
                                    </button>
                                </div>
                            </form>

                            <p className="mt-10 text-center text-sm text-gray-500">
                                Not a user ? {' '}
                                <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-800">
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    )
}
