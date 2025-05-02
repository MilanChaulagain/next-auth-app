import Link from 'next/link'
import React from 'react'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Header = () => {
  return (
    <header className='bg-gradient-to-r from-blue-300 to-purple-400 shadow-lg'>
        <div className="max-w-6xl mx-auto flex items-center justify-between p-3">
            {/* logo */}
            <Link href='/' className='text-2xl font-extrabold group cursor-pointer'>
                <span className='text-blue-500 group-hover:text-blue-700'>Next</span>
                <span className='text-gray-800 group-hover:text-gray-900'>Auth</span>
            </Link>
            {/* add a navigation menu */}
            <nav className='flex items-center space-x-4'>
                <ul className='flex gap-4'>
                <Link href='/' className='text-gray-800 hover:text-gray-900'>Home</Link>
                <Link href='/about' className='text-gray-800 hover:text-gray-900'>About</Link>
                <SignedIn>
                    <UserButton />    
                </SignedIn>
                <SignedOut>
                    <SignInButton />
                </SignedOut>     
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header
