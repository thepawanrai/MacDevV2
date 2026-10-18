import React, { useState } from 'react';
import { X, UserCheck, ShieldCheck, Mail, Lock, User, LogIn, ArrowRight } from 'lucide-react';
import { AppStore } from '../../services/store';
import { User as UserType } from '../../types';
import { initialUsers } from '../../data/seedData';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: UserType | null;
  onUserChange: (user: UserType | null) => void;
  onNavigateToDashboard?: (role: 'learner' | 'admin') => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onUserChange,
  onNavigateToDashboard,
}) => {
  const [tab, setTab] = useState<'switch' | 'custom'>('switch');
  const [customName, setCustomName] = useState('');
  const [customEmail, setCustomEmail] = useState('');
  const [customRole, setCustomRole] = useState<'learner' | 'admin'>('learner');

  if (!isOpen) return null;

  const handleSelectUser = (user: UserType) => {
    AppStore.setCurrentUser(user);
    onUserChange(user);
    onClose();
    if (onNavigateToDashboard) {
      onNavigateToDashboard(user.role);
    }
  };

  const handleCreateCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customEmail.trim() || !customName.trim()) return;

    const newUser: UserType = {
      id: 'usr-' + Date.now(),
      name: customName.trim(),
      email: customEmail.trim(),
      role: customRole,
      createdAt: new Date().toISOString(),
    };

    AppStore.setCurrentUser(newUser);
    onUserChange(newUser);
    onClose();
    if (onNavigateToDashboard) {
      onNavigateToDashboard(newUser.role);
    }
  };

  const handleLogout = () => {
    AppStore.setCurrentUser(null);
    onUserChange(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-neutral-100 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-[#111111] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-neutral-400 hover:text-white p-1 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="text-[#D13A28] font-bold text-xs uppercase tracking-wider mb-1">
            Authentication & Role Access
          </div>
          <h3 className="text-xl font-bold tracking-tight text-white">
            {currentUser ? 'Switch or Manage Account' : 'Sign In to MAC Platform'}
          </h3>
          <p className="text-neutral-400 text-xs mt-1">
            Access Learner Course Player or Admin Operations
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-neutral-100 bg-neutral-50 px-6 pt-3 gap-4 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setTab('switch')}
            className={`pb-2.5 transition-colors border-b-2 ${
              tab === 'switch'
                ? 'border-[#D13A28] text-[#D13A28]'
                : 'border-transparent text-neutral-500 hover:text-neutral-800'
            }`}
          >
            Demo Quick Access
          </button>
          <button
            type="button"
            onClick={() => setTab('custom')}
            className={`pb-2.5 transition-colors border-b-2 ${
              tab === 'custom'
                ? 'border-[#D13A28] text-[#D13A28]'
                : 'border-transparent text-neutral-500 hover:text-neutral-800'
            }`}
          >
            Custom Sign In
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {tab === 'switch' ? (
            <div className="space-y-3">
              <p className="text-xs text-neutral-500 mb-3">
                Experience the application instantly from either role perspective:
              </p>

              {/* Admin Profile */}
              <button
                type="button"
                onClick={() => handleSelectUser(initialUsers[0])}
                className={`w-full p-4 rounded-xl border text-left flex items-start justify-between transition-all ${
                  currentUser?.id === initialUsers[0].id
                    ? 'border-[#D13A28] bg-red-50/50'
                    : 'border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#111111] text-white flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#D13A28]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-neutral-900">Deepak Verma</span>
                      <span className="text-[10px] uppercase font-bold tracking-wider bg-red-100 text-[#D13A28] px-2 py-0.5 rounded">
                        Admin / Founder
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500 mt-0.5">officedeepakverma@gmail.com</p>
                    <p className="text-[11px] text-neutral-600 mt-1">
                      Full access to program creation, leads manager, live sessions, and site settings.
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 mt-1 shrink-0" />
              </button>

              {/* Learner Profile */}
              <button
                type="button"
                onClick={() => handleSelectUser(initialUsers[1])}
                className={`w-full p-4 rounded-xl border text-left flex items-start justify-between transition-all ${
                  currentUser?.id === initialUsers[1].id
                    ? 'border-[#D13A28] bg-red-50/50'
                    : 'border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-neutral-100 text-neutral-800 flex items-center justify-center shrink-0">
                    <UserCheck className="w-5 h-5 text-neutral-700" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-neutral-900">Rahul Sharma</span>
                      <span className="text-[10px] uppercase font-bold tracking-wider bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded">
                        Learner
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500 mt-0.5">rahul.sharma@example.com</p>
                    <p className="text-[11px] text-neutral-600 mt-1">
                      Enrolled in Communication Skills course. Interactive player, lesson completion, live labs.
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 mt-1 shrink-0" />
              </button>

              {currentUser && (
                <div className="pt-2 text-center">
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="text-xs text-red-600 hover:text-red-700 underline"
                  >
                    Log Out of Current Session
                  </button>
                </div>
              )}
            </div>
          ) : (
            <form onSubmit={handleCreateCustom} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    placeholder="e.g. Priya Singh"
                    className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-[#D13A28] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={customEmail}
                    onChange={(e) => setCustomEmail(e.target.value)}
                    placeholder="e.g. priya@example.com"
                    className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-[#D13A28] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  Role
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setCustomRole('learner')}
                    className={`py-2 px-3 text-xs font-medium rounded-xl border transition-all ${
                      customRole === 'learner'
                        ? 'border-[#D13A28] bg-red-50 text-[#D13A28] font-semibold'
                        : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'
                    }`}
                  >
                    Learner
                  </button>
                  <button
                    type="button"
                    onClick={() => setCustomRole('admin')}
                    className={`py-2 px-3 text-xs font-medium rounded-xl border transition-all ${
                      customRole === 'admin'
                        ? 'border-[#D13A28] bg-red-50 text-[#D13A28] font-semibold'
                        : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'
                    }`}
                  >
                    Administrator
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[#111111] text-white font-semibold text-sm rounded-xl hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <LogIn className="w-4 h-4" />
                Sign In
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
