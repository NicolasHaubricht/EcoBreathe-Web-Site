import React from 'react'
import ButtonHome from '../../components/ButtonHome/ButtonHome'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <>
            <section className='min-h-dvh flex items-center justify-center'>
                <div className='flex items-center justify-center gap-5 flex-wrap p-8'>
                    <h1 className='text-4xl lg:text-6xl font-semibold uppercase text-green-1'>404 Error</h1>
                    <Link to="/">
                        <ButtonHome text_btn="Home"></ButtonHome>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Error