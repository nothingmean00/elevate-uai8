import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Welcome to Elevate</h1>
      <p className="mb-6">Your journey to better solutions starts here.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/features" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">Features</h2>
          <p>Discover what makes us different</p>
        </Link>
        
        <Link href="/contact" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p>Get in touch with our team</p>
        </Link>
        
        <Link href="/login" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">Login</h2>
          <p>Access your account</p>
        </Link>
      </div>
    </div>
  );
} 