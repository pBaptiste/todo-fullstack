import React from 'react'
import Login from '../login'
import Logo from '@/components/logo'
import ThemeSwitcher from '@/components/theme-switcher'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

//Unauthenticated users are redirected to this login page

const page = async () => {
    const supabase = createServerComponentClient({ cookies })

    const {
        data: { session },
    } = await supabase.auth.getSession()

    if (session) {
        redirect('/')
    }
    return (
        <div className="relative flex min-h-screen justify-center pt-[110px] px-6 pb-[72px] transition-colors duration-[400ms] lg:pb-[52px] bg-[#FAFAFA] dark:bg-[#171823] z-10">
            <div className='absolute top-0 w-full flex flex-col gap-1 items-center text-center bg-slate-200 z-20'>
                <p className='font-normal'>This is a demo of a Todo App with Authentication & Database functionality from Supabase.</p>
                <p className='font-normal'>To sign in, use Email: <span className='font-bold'>test@example.com</span> and Password: <span className='font-bold'>test</span></p>
                <p className='font-normal'>Or, use Email: <span className='font-bold'>test2@example.com</span> and Password: <span className='font-bold'>12345</span></p>
            </div>
            {/* Background Image */}
            <div className='absolute top-0 left-0 w-full h-[375px] lg:h-[300px] bg-mobile-light lg:bg-desktop-light dark:bg-mobile-dark lg:dark:bg-desktop-dark bg-no-repeat bg-cover z-0'></div>

            <section className='z-10 w-[327px] lg:w-[540px]'>
                <div className='flex justify-between mb-10'>
                    <Logo />
                    <ThemeSwitcher />
                </div>
                <Login />
            </section>
        </div>
    )
}

export default page