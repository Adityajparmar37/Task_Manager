import React from 'react'
import { useAuth } from '../../Hooks/useAuth'

export default function Profile() {
    const { user } = useAuth();
    console.log(user);
    return (
        <div>
            {user && (
                <h1>{user.name}</h1>
            )}
        </div>
    )
}
