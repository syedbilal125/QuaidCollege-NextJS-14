import Link from 'next/link';
import React from 'react';

type SingleFAQProps = {

};

type SingleEnrollmentProps = {
    FAQ_DATA: {
        id: string
        name: string
        phone: string
        email: string
    },
    key: string
};

const SingleFAQ: React.FC<SingleEnrollmentProps> = ({ FAQ_DATA, key }) => {

    return <div>
        <Link href={`/FAQS/${FAQ_DATA.id}`} className='flex space-x-2 py-6 px-10 bg-blue-500 mt-2 justify-between text-white rounded-md hover:translate-x-3 cursor-pointer group duration-500'>
            <span className='group-hover:underline'>{FAQ_DATA.name}</span>
        </Link>
    </div>
}
export default SingleFAQ;