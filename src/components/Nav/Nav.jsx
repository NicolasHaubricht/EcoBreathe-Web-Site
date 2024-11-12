import React from 'react'

const Nav = () => {
    return (
        <>
            <nav className='w-full h-[50px] z-50'>
                <ul className='w-full h-full flex justify-around items-center'>
                    <li>
                        <h1 className='uppercase font-bold'>Ecobreathe</h1>
                    </li>
                    <li>
                        <button>Avatar</button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav