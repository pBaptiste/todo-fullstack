"use client"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import type { Database } from '@/types/supabase'

const Footer = () => {
    const router = useRouter()
    const supabase = createClientComponentClient<Database>()

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.refresh()
    }

    return (
        <div className='flex flex-col items-center gap-4'>
            <p className='text-center mt-4 text-light-secondary dark:text-dark-secondary text-sm tracking-[-0.194px] lg:pt-7'>Drag and drop to reorder list</p>
            <div>
                <button onClick={handleSignOut} className='text-[#3A7CFD] text-center' type='submit'>Sign Out</button>
            </div>
        </div>
    )
}

export default Footer