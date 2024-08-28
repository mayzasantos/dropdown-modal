"use client"
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

interface DropdownMenuProps {
  setShowLoginModal: (show: boolean) => void;
}

export default function DropdownMenu({ setShowLoginModal }: DropdownMenuProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <div className="relative">
      <button 
        onClick={() => setDropdownOpen(!dropdownOpen)} 
        className="flex items-center space-x-2 focus:outline-none"
      >
        {user ? (
          <>
            <img src={user.photoURL} alt={user.name} className="w-8 h-8 rounded-full" />
            <span>{user.name}</span>
          </>
        ) : (
          <span>Login</span>
        )}
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
          {user ? (
            <div className="py-2">
              <button
                onClick={logout}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Sair
              </button>
            </div>
          ) : (
            <div className="py-2">
              <button
                onClick={() => setShowLoginModal(true)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Login
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
