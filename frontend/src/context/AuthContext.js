import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');

        if (userInfo) {
            const UserLocalData = JSON.parse(userInfo);

            // Include the token in the request headers
            const config = {
                headers: {
                    'Authorization': `Bearer ${UserLocalData.token}`
                }
            };

            axios.get('/api/user/auth', config)
                .then(response => {
                    console.log("USER in AUTHHOOK ===> " , response.data)
                    setUser(response.data);
                })
                .catch(error => {
                    console.log('Error Auth fetching user data:', error);
                });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}
