import { apiBaseUrl } from '@/services/api';
import React, { createContext, useState, useContext, useEffect } from 'react';

interface User{
    id: string;
    email: string;
    name: string;
    role: string;
}

interface AuthContextType {
  user: User | null;
  login: (token: string, user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async (token:string) => {
      try {
        const response = await fetch(`${apiBaseUrl}/auth/user`, {
          method: 'GET',
          headers: { 'Authorization': `Bearer ${token}` },
        });
        const user = await response.json();
        setUser(user);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      }
    };
    if (!user) {
      const token = localStorage.getItem('token');
      if (token) {
        getUser(token);
      }
    }
  }, [user]);

  const login = (token: string, user : User) => {
    localStorage.setItem('token', token);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

