// File: src/simulators/web/javascript/FocusTrapSimulator.jsx

import React, { useState, useEffect, useRef } from 'react';
import { Target, X } from 'lucide-react';

const FocusTrapSimulator = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeElementText, setActiveElementText] = useState('body');
  
  const modalRef = useRef(null);
  const openBtnRef = useRef(null);

  // Track active element continuously for the visualizer
  useEffect(() => {
    const handleFocusIn = () => {
      const el = document.activeElement;
      if (el) {
        setActiveElementText(el.getAttribute('data-label') || el.tagName.toLowerCase());
      }
    };
    
    document.addEventListener('focusin', handleFocusIn);
    return () => document.removeEventListener('focusin', handleFocusIn);
  }, []);

  // Focus Trap Logic
  useEffect(() => {
    if (!isModalOpen || !modalRef.current) return;

    const modal = modalRef.current;
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Focus first element on open
    firstElement?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
        return;
      }

      if (e.key === 'Tab') {
        // Shift + Tab
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } 
        // Tab
        else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    modal.addEventListener('keydown', handleKeyDown);
    
    // Cleanup and return focus
    return () => {
      modal.removeEventListener('keydown', handleKeyDown);
      openBtnRef.current?.focus();
    };
  }, [isModalOpen]);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-[#0f172a] rounded-2xl border border-gray-800 overflow-hidden shadow-2xl w-full relative">
      <div className="bg-gray-900/80 p-4 border-b border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Target className="text-yellow-400 w-5 h-5" />
          <h3 className="font-bold text-gray-200">Focus Trap Simulator</h3>
        </div>
        <div className="text-xs bg-black/40 border border-gray-700 px-3 py-1 rounded text-gray-400 font-mono">
          document.activeElement = <span className="text-yellow-400 font-bold">{activeElementText}</span>
        </div>
      </div>

      <div className="p-8 relative min-h-[400px] flex flex-col items-center justify-center bg-gray-900/30">
        <p className="text-gray-400 mb-8 text-center max-w-md">
          Use the <strong>Tab</strong> key on your keyboard to navigate. Notice how you cannot tab out of the modal while it is open.
        </p>

        <div className="flex gap-4">
          <button 
            data-label="Link: Home"
            className="px-4 py-2 bg-gray-800 text-gray-300 rounded focus:outline-none focus:ring-4 focus:ring-sky-500/50"
          >
            Dummy Link
          </button>
          <button 
            ref={openBtnRef}
            onClick={() => setIsModalOpen(true)}
            data-label="Button: Open Modal"
            className="px-6 py-2 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-500/50 transition-colors"
          >
            Open Modal
          </button>
          <button 
            data-label="Input: Search"
            className="px-4 py-2 bg-gray-800 text-gray-300 rounded focus:outline-none focus:ring-4 focus:ring-sky-500/50"
          >
            Dummy Input
          </button>
        </div>

        {/* The Modal */}
        {isModalOpen && (
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-10">
            <div 
              ref={modalRef}
              className="bg-gray-800 border border-gray-700 rounded-xl w-full max-w-sm shadow-2xl overflow-hidden animate-fade-in-up"
              role="dialog"
              aria-modal="true"
            >
              <div className="p-4 border-b border-gray-700 flex justify-between items-center">
                <h4 className="font-bold text-white">Edit Profile</h4>
                <button 
                  onClick={closeModal}
                  data-label="Modal: Close Button"
                  className="p-1 rounded text-gray-400 hover:text-white focus:outline-none focus:ring-4 focus:ring-rose-500/50"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Username</label>
                  <input 
                    type="text" 
                    data-label="Modal: Username Input"
                    className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent" 
                    placeholder="Enter username..."
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Role</label>
                  <select 
                    data-label="Modal: Role Select"
                    className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option>Admin</option>
                    <option>User</option>
                  </select>
                </div>
                <button 
                  onClick={closeModal}
                  data-label="Modal: Save Button"
                  className="w-full mt-4 bg-yellow-500 text-black font-bold py-2 rounded focus:outline-none focus:ring-4 focus:ring-yellow-500/50 hover:bg-yellow-400 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FocusTrapSimulator;