"use client"
import { useState } from 'react';
import DropdownMenu from '../components/dropdown';
import LoginModal from '../components/modal';
import { AuthProvider } from '../context/AuthContext';

export default function Home() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <AuthProvider>
      <div className="p-4">
        <DropdownMenu setShowLoginModal={setShowLoginModal} />
        <LoginModal show={showLoginModal} onClose={() => setShowLoginModal(false)} />
      </div>
    </AuthProvider>
  );
}
