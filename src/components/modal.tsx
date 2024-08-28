"use client"

import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

interface LoginModalProps {
  show: boolean;
  onClose: () => void;
}

export default function LoginModal({ show, onClose }: LoginModalProps) {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!show) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(email, password);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className='p-6'>
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Entrar
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 w-full text-center text-gray-500 underline"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
