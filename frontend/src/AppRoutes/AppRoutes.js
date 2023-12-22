import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultPage from "../Pages/DefaultPage/DefaultPage";
import Login from "../Pages/Login/Login";
import MyNotes from "../Pages/MyNotes/MyNotes";
import SignUp from "../Pages/SignUp/SignUp";
import { Toaster } from 'react-hot-toast';





export default function AppRoutes() {
  return <BrowserRouter>
    <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
    <Routes>
      <Route path="/" element={<DefaultPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/notes" element={<MyNotes />} />
    </Routes>
  </BrowserRouter>
}