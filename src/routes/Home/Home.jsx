import React from 'react'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'

const Home = (props) => {
    return (
        <section className='h-dvh w-full flex flex-col items-center justify-center bg-off-white -z-10'>
            <div className='flex flex-col p-7'>
                <h1 className='uppercase font-bold text-5xl sm:text-5xl  md:text-7xl text-center md:text-start text-green-1'>Wellcome</h1>
                <h2 className='uppercase font-bold text-3xl sm:text-3xl md:text-5xl text-center md:text-start text-green-2'> To my Project <strong className='font-bold text-green-2'>Ecobreathe</strong></h2>
                <div className='flex flex-wrap gap-5 justify-around mt-10'>
                    <Link to='/dashboard'><Button text_btn={'Dashboard'} /></Link>
                    <Link to='/about'><Button text_btn={'About Project '} /></Link>
                </div>
            </div>
        </section>
    )
}

export default Home