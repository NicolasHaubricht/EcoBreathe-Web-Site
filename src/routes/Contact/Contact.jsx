import React from 'react'
import ButtonGitHub from '../../components/ButtonGitHub/ButtonGitHub'
import ButtonLinkedIn from '../../components/ButtonLinkedIn/ButtonLinkedIn'

const Contact = () => {
    return (
        <section className='bg-off-white min-h-dvh z-50 flex w-full items-center justify-center'>
            <ButtonGitHub></ButtonGitHub>
            <ButtonLinkedIn></ButtonLinkedIn>
        </section>  
    )
}

export default Contact