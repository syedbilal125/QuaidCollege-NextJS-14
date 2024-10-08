import moment from 'moment';
import Link from 'next/link';
import React from 'react';

type SingleEnrollmentProps = {
    enrollmentData: {
        id: string
        fullname: string
        phone: string
        colification: string
        email: string
        createdAt: number
        Gender: string
        address: string
    },
    key: string
};


const SingleEnrollment: React.FC<SingleEnrollmentProps> = ({ enrollmentData, key }) => {
    const data = [
        {
            id: enrollmentData.id,
            timestamp: enrollmentData.createdAt
        }
    ]
    const sortedData = data.sort((a, b) => b.timestamp - a.timestamp);

    return <Link href={`/enrollments/${enrollmentData.id.trim()}`} className='flex space-x-2 py-6 px-10 bg-blue-500 mt-2 justify-between text-white rounded-md hover:translate-x-3 cursor-pointer group duration-500'>
        <span className='group-hover:underline'>{enrollmentData.fullname}</span>
        {sortedData.map((item) => (
            <p key={item.id}>{moment(item.timestamp).fromNow()}</p>
        ))}
    </Link>
}
export default SingleEnrollment;