import { useState } from 'react';

const useAuth = () => {

    interface User {
        id: number;
        email: string;
    }

    const [user, setUser] = useState<User | null>(null);
    
    const login = async (email: string, password: string) => {
        const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        });
    
        if (response.ok) {
        const user = await response.json();
        setUser(user);
        }
    };
    
    const logout = () => {
        setUser(null);
    };
    
    return { user, login, logout };
}
    
export default useAuth;