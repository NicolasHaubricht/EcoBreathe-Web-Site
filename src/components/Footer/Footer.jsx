import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='w-full text-center p-3 flex items-center justify-center flex-wrap bg-green-2'>
                <p className='mr-2 text-off-white'>&copy; {new Date().getFullYear()} Copyright:{' '}</p>
                <p className='text-dark text-off-white'>
                    Nicolas Haubricht Hainfellner
                </p>
            </footer>
        </>
    )
}

export default Footer