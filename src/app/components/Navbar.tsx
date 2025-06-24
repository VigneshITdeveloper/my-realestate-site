'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-10 py-6 bg-white shadow-sm">
      <h1 className="text-xl font-bold text-[#7A351E]">Keystone</h1>
      <nav className="space-x-6 text-gray-600 font-medium">
        <Link href="#">Home</Link>
        <Link href="#">About us</Link>
        <Link href="#">Gallery</Link>
        <Link href="#">Project</Link>
        <Link href="#">Blogs</Link>
        <Link href="#">Contact us</Link>
      </nav>
    </header>
  );
}
