import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  name: string;
  email: string;
  photoURL: string;
}
interface Props {
  children : ReactNode
}

interface AuthContextProps {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

// Criação do contexto de autenticação
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider =({ children }: Props) =>{
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string) => {
    setUser({
      name: 'John Doe',
      email: email,
      photoURL: 'https://example.com/photo.jpg',
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
