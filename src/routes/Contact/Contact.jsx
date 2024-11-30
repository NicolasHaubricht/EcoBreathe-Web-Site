import React from 'react'
import ButtonGitHub from '../../components/ButtonGitHub/ButtonGitHub'
import ButtonLinkedIn from '../../components/ButtonLinkedIn/ButtonLinkedIn'

const Contact = () => {
    return (
        <section className='bg-off-white min-h-dvh z-50 flex w-full items-center justify-center'>
            <div className='flex flex-wrap gap-4'>
                <ButtonGitHub></ButtonGitHub>
                <ButtonLinkedIn></ButtonLinkedIn>
            </div>
        </section>
    )
}

export default Contact