"use client";

import { useState } from 'react';
import Link from 'next/link';
import AuthButton from './authbutton';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/50 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="group flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 group-hover:rotate-12 transition-transform duration-300 flex items-center justify-center" >{"</>"}</div>
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-xl font-bold text-transparent">
                param<span className="text-cyan-400">code</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center gap-10">
              <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Practice
              </Link>
              <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Courses
              </Link>
              <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Blind 75
              </Link>
              <div>
              <AuthButton/>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/10 hover:text-white focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden border-t border-white/5 bg-slate-950/90 backdrop-blur-xl`}>
        <div className="space-y-1 px-4 pb-6 pt-4">
          <Link href="/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5">
            Practice
          </Link>
          <Link href="/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5">
            Courses
          </Link>
          <div className="pt-4">
            <Link href="/" className="block w-full text-center rounded-full bg-cyan-500 py-3 text-base font-semibold text-white">
              Blind 75
            </Link>
            <AuthButton/>
          </div>
        </div>
      </div>
    </nav>
  );
}