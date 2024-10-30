'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Home(){
  const router = useRouter();
  return <div className='flex justify-center items-center h-screen bg-slate-100 text-lg font-bold'>
    <button onClick={() => router.push('/dashboard')}>
      Go to dashboard
    </button>
  </div>
}




