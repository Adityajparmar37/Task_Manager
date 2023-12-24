import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../Hooks/useAuth'

export default function AuthRoute({ children }) {
    const location = useLocation()   //Koi page thi user login kare toh user pacho ae page par ej avijai , ...returnUrl 

    const { user } = useAuth();
    return (
        <>
            {user ? (children) : <Navigate to={`/login?returnUrl=${location.pathname}`} replace />}

            {/* replace is for removing all history */}
        </>
    )
}
