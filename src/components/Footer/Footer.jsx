import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='w-full text-center p-3 flex items-center justify-center flex-wrap bg-off-white'>
                <p className='mr-1 text-green-1'>&copy; {new Date().getFullYear()} Copyright:{' '}</p>
                <p className='text-dark text-green-1'>
                    Nicolas Haubricht Hainfellner
                </p>
            </footer>
        </>
    )
}

export default Footer