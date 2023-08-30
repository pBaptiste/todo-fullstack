import Logo from '@/components/logo'
import ThemeSwitcher from '@/components/theme-switcher'
import TodoContainer from '@/components/todo-container'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Footer from '@/components/footer'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect('/unauthenticated')
  }

  return (
    <main className="relative flex min-h-screen justify-center pt-12 lg:pt-[70px] px-6 pb-[72px] lg:pb-[52px] transition-colors duration-[400ms] bg-[#FAFAFA] dark:bg-[#171823]">

      {/* Background Image */}
      <div className='absolute top-0 left-0 w-full h-[375px] lg:h-[300px] bg-mobile-light lg:bg-desktop-light dark:bg-mobile-dark lg:dark:bg-desktop-dark bg-no-repeat bg-cover z-0'></div>

      {/* MAIN CONTENT */}
      <section className='z-10 w-[327px] lg:w-[540px]'>

        <div className='flex justify-between mb-10'>
          <Logo />
          <ThemeSwitcher />
        </div>

        <TodoContainer />

        <Footer />


      </section>

    </main>
  )
}
