'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import type { Database } from '@/types/supabase'

export default function Login() {
    const [email, setEmail] = useState('test@example.com')
    const [password, setPassword] = useState('test')
    const router = useRouter()
    const supabase = createClientComponentClient<Database>()

    const handleSignIn = async () => {
        await supabase.auth.signInWithPassword({
            email,
            password,
        })
        router.refresh()
    }

    return (
        <div className=' bg-white dark:bg-dark-bg transition-colors duration-[400ms]  rounded-[5px] w-full shadow-list-shadow-light dark:shadow-input-shadow-dark flex flex-col px-6 py-5'>
            <div className='flex flex-col gap-1 border border-[#E3E4F1] dark:text-white rounded-[5px] px-3 py-2 mb-5 w-full'>
                <label htmlFor="email" className='text-light-primary dark:text-dark-primary font-bold text-sm'>Email</label>
                <input name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className='outline-none bg-transparent font-normal caret-[#3A7CFD]' />
            </div>

            <div className='flex flex-col gap-1 border border-[#E3E4F1] dark:text-white  rounded-[5px] px-3 py-2 mb-5 w-full'>
                <label htmlFor="password" className='text-light-primary dark:text-dark-primary font-bold text-sm'>Password</label>
                <input
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className='outline-none bg-transparent font-normal caret-[#3A7CFD]'
                />
            </div>


            <button
                className='bg-dark-bg dark:bg-[#E3E4F1] text-white dark:text-light-primary font-bold rounded-[5px] py-2'
                onClick={handleSignIn}
            >Sign in
            </button>


        </div>
    )
}