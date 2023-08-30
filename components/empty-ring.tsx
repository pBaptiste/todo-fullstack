import React from 'react'

const EmptyRing = () => {
    return (
        <div className='w-5 h-5 lg:w-6 lg:h-6 fill-white dark:fill-dark-bg transition-colors duration-[500ms] stroke-[#E3E4F1] dark:stroke-[#4b4239]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" >
                <circle cx="10" cy="10" r="9.5" />
                <circle opacity="0.01" cx="10" cy="10" r="10" fill="url(#paint0_linear_0_343)" />
                <path opacity="0.01" d="M6.66675 10.2534L8.91333 12.5L13.9133 7.5" stroke="white" strokeWidth="2" />
                <defs>
                    <linearGradient id="paint0_linear_0_343" x1="-10" y1="10" x2="10" y2="30" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#55DDFF" />
                        <stop offset="1" stopColor="#C058F3" />
                    </linearGradient>
                </defs>
            </svg>
        </div>

    )
}

export default EmptyRing