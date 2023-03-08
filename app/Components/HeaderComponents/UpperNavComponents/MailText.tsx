import React from 'react'
import { HiOutlineMail } from 'react-icons/hi';

interface Text{
    text: string
}

function MailText({text}:Text): JSX.Element {
    return (

        <div className='flex justify-center items-center p-1'>
            <span>
                <HiOutlineMail />
            </span>
            <span className='p-1'>
                <p>{text}</p>
            </span>
        </div>

    )
}

export default MailText
