"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-mono text-sm">{"</>"}</span>
              </div>
              <span className="text-xl font-bold text-white">param<span className="text-cyan-400">code</span></span>
            </Link>
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
              Master the art of problem-solving. Practice curated DSA problems, track your progress, and build the foundation for your dream software engineering career.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-cyan-400 transition-colors">Practice</Link></li>
              <li><Link href="/" className="hover:text-cyan-400 transition-colors">Courses</Link></li>
              <li><Link href="/" className="hover:text-cyan-400 transition-colors">Blind 75</Link></li>
            </ul>
          </div>

          {/* Social/Support Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">GitHub</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Twitter</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Discord</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} ParamCode. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}