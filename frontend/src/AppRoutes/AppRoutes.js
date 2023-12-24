import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultPage from "../Pages/DefaultPage/DefaultPage";
import Login from "../Pages/Login/Login";
import MyNotes from "../Pages/MyNotes/MyNotes";
import SignUp from "../Pages/SignUp/SignUp";
import { Toaster } from 'react-hot-toast';
import AuthRoute from "../Components/AuthRoute/AuthRoute";





export default function AppRoutes() {
  return (
    <>
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/notes" element={<AuthRoute>
          <MyNotes />
        </AuthRoute>} />
      </Routes>
    </>
  );
}