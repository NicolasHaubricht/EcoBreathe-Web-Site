import React from 'react'

const Nav = () => {
    return (
        <>
            <nav className='absolute w-full h-[50px] bg-off-white'>
                <ul className='w-full h-full flex justify-around items-center'>
                    {/* Name Project */}
                    <li>
                        <h1 className='uppercase font-bold text-green-1'>Ecobreathe</h1>
                    </li>

                    <li className='max-md:hidden'>
                        <p className='font-thin uppercase'>For a better world!</p>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav